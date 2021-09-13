import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
//Componentes
import Home from "./Views/Home";
import Search from "./Views/Search";
import Info from "./Views/Info";
import NotFound from "./Views/NotFound";

function App() {
  return(
    <Router>
      <Switch>
        <Route path = "/" exact>
          <Home/>
        </Route>
        <Route path = "/search" exact>
          <Search/>
        </Route>
        <Route path = "/country/:key" exact>
        <Info/>
      </Route>
        <Route path = "*" >
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
