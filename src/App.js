import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import How from "./How";
import Pricing from "./Pricing";
import Intro from "./Intro";
import Subscribe from "./Subscribe";

const styles = theme => ({
  root: {
    height: "90vh"
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div class={classes.root}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/how-it-works" component={How} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/access" component={Subscribe} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);
