import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

class Routes extends React.Component {
    render() {
      return (
        <Router>
          <Switch>
          </Switch>
          <GlobalStyle />
        </Router>
    );
  }
}
      
export default Routes;