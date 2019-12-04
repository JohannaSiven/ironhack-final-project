import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <h1>We need a name for this project</h1>
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
