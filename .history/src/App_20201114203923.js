import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hom

function App() {
  return <div>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Home}/>
    </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
