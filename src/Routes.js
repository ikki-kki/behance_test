import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
            <Main />
          </Switch>
        </Router>
    );
  }
}
      
export default Routes;