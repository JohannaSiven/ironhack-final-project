import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import GlobalStyle from "./styles/global";

axios.get("/api/auth/loggedin").then(response => {
  const user = response.data;

  ReactDOM.render(
    <BrowserRouter>
      <GlobalStyle />
      <App user={user} />
    </BrowserRouter>,
    document.getElementById("root")
  );
});
