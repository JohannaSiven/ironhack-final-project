import React, { Component } from 'react'

export default class BestProjects extends Component {
                 render() {
                   const filter = this.props.projects.filter(value => {
                     if (value.owner !== this.props.user._id) {
                       return value;
                     }
                     return false;
                   });

                   const sorted = filter.sort((a, b) => {
                     const aTags = a.tags.filter(
                       value => this.props.user.tags.indexOf(value) !== -1
                     ).length;
                     const bTags = b.tags.filter(
                       value => this.props.user.tags.indexOf(value) !== -1
                     ).length;
                     return bTags - aTags;
                   });

                   return (
                     <div
                       style={{
                         display: "flex",
                         flexWrap: "wrap",
                         justifyContent: "space-around",
                         backgroundColor: "lightgray"
                       }}
                     >
                       {sorted.map(value => {
                         return (
                           <div key={value._id}>
                             <h3>{value.title}</h3>
                             <h4>{value.description}</h4>
                             <h3>Tags</h3>
                             {value.tags.map((value,index) => {
                               return <p key={index}>{value}</p>;
                             })}
                             <h3>Roles</h3>
                             {value.requiredRoles.map((value,index) => {
                               return <p key={index}>{value.name}</p>;
                             })}
                             <a href={`/projects/${value._id}`}>
                               Check Project
                             </a>
                           </div>
                         );
                       })}
                     </div>
                   );
                 }
               }
