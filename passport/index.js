const passport = require("passport");
//const LinkedInStrategy = require("passport-linkedin").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const User = require("../models/User");

require("./serializers");
require("./localStrategy");

// Linkedin Authentication
passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_API_KEY,
      clientSecret: process.env.LINKEDIN_SECRET_KEY,
      callbackURL: "http://localhost:5555/api/auth/linkedin/callback",
      scope: ["r_liteprofile", "w_member_social", "r_emailaddress"],
      state: true
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(JSON.stringify(profile));
      User.findOne({
        linkedinId: profile.id
      })
        // if user found
        .then(user => {
          if (user) {
            // log in user
            console.log(user);
            done(null, user);
          } else {
            // create as new user
            User.create({
              linkedinId: profile.id,
              username: profile.displayName,
              profilePic: profile.photos[2].value,
              email: profile.emails[0].value
            }).then(createdUser => {
              console.log("USER FROM STRAT:", createdUser);
              done(null, createdUser);
            });
          }
        })
        .catch(err => {
          done(err);
        });
    }
  )
);

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());
};
