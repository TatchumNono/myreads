import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../components/Main";
import Search from '../components/Search'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route  path='/Upload' component={Search}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
