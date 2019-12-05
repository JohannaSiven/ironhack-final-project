import React, { Component } from 'react'
import axios from "axios"

class BestProjects extends Component {

  

  render(){
    const filter = this.props.projects.filter(value => {
      if (value.requiredRoles.indexOf(this.props.user.role) >= 0) {
        return value;
      }
      return;
    });

    const sorted = filter.sort((a, b) => {
      const aTags = a.tags.filter(value => this.props.user.tags.indexOf(value) !== -1)
        .length;
      const bTags = b.tags.filter(value => this.props.user.tags.indexOf(value) !== -1)
        .length;
      return bTags - aTags;
    });

    return(
      
    <div>{sorted.map(value =>{
      return <div>
    <h1>Title: {value.title}</h1>
    <h3>Tags</h3>
    {value.tags.map(value =>{
    return <p>{value}</p>
    })}
      </div>
    })}</div>
    )
  }
}



export default class Dashboard extends Component {
                 state = {
                   projects: [],
                   user: this.props.user
                 };

                 getProjects() {
                   axios
                     .get("/api/projects")
                     .then(response => {
                      let responseFilter = response.data.filter(value => {
                           if (value.requiredRoles.indexOf(this.props.user.role) >= 0) {
                             return value;
                           }
                           return;
                         })

                       this.setState({
                         projects: responseFilter
                       });
                       console.log(this.state.projects);
                     })
                     .catch(err => {
                       console.log(err);
                     });
                 }

                 componentDidMount() {
                   console.log("component mounted");
                   this.getProjects();
                 }



                 render() {
                  


                   console.log(this.props.user, this.state);
                   return (
                     <div>
                       <div>

                         Projects matching Your Profile
                         <BestProjects projects={this.state.projects} user={this.props.user}/>
                       </div>
                     </div>
                   );
                 }
               }
