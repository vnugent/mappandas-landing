import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  ctaButton: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2
  }
});

class NavBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="classes.root">
        <AppBar position="fixed" color="black">
          <Toolbar className={classes.ctaButton}>
            <Button
              className={classes.ctaButton}
              color="default"
              component={Link}
              to="/"
            >
              Map Pandas
            </Button>
            <Button
              className={classes.ctaButton}
              color="default"
              component={Link}
              to="/how-it-works"
            >
              how it works
            </Button>
            <Button
              className={classes.ctaButton}
              color="inherit"
              component={Link}
              to="/pricing"
            >
              Pricing
            </Button>
            <Button
              className={classes.ctaButton}
              color="inherit"
              component={Link}
              to="/access"
            >
              Early Access
            </Button>
            <Button
              className={classes.ctaButton}
              color="primary"
              variant="outlined"
              href="https://app.mappandas.com"
            >
              Launch App
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
