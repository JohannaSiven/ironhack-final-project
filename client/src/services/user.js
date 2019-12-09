import axios from "axios";

const login = (username, password) => {
  return axios
    .post("/api/auth/login", {
      username: username,
      password: password
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const signup = (username, password, role) => {
  return axios
    .post("/api/auth/signup", {
      username: username,
      password: password,
      role: role
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data;
    });
};

const logout = () => {
  axios.delete("/api/auth/logout");
};

const editUserProfile = (_id, userInfos) => {
  return axios
    .put(`/api/profiles/${_id}`, userInfos)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      if (err.response.status === 404) {
        this.setState({
          error: err.response.data.message
        });
      }
    });
};

export { signup, login, logout, editUserProfile };
