import axios from "axios";

const projectInfos = projectId => {
  return axios
    .get(`/api/projects/${projectId}`)
    .then(response => response.data)
    .catch(err => err.response.data);
};

const addApplication = (projectId, newApplication) => {
  return axios
    .put(`/api/projects/apply/${projectId}`, newApplication)
    .then(response => response.data)
    .catch(err => err.response.data);
};

export { projectInfos, addApplication };
