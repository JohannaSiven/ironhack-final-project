import axios from "axios";

const handleUpload = theFile => {
  // console.log('file in service: ', theFile)
  return axios
    .post("/api/profiles/upload", theFile)
    .then(response => response.data)
    .catch(err => err.response.data);
};

export { handleUpload };
