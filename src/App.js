import React from "react";
import "./App.css";
import Init from "./Components/grid";
import InfoSite from "./Components/infosite";
import Program from "./Components/program";
import Movie from "./Components/moviepage";
import LoginPage from "./Components/loginpage";
import AdminPage from "./Components/Admin";
import EditMovie from "./Components/AdminComponents/PartialComponents/EditMovie";

import { HashRouter, Route, Switch } from "react-router-dom";
import BioNavbar from "./Components/navbar";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <BioNavbar />
        <Switch>
          <Route path="/infobook/" component={InfoSite} />
          <Route path="/upcoming" />
          <Route path="/program" component={Program} />
          <Route path="/movie/:id" component={Movie} />
          <Route exact path="/" component={Init} />
          <Route path="/login" component={LoginPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/editmovie/:id" component={EditMovie} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
