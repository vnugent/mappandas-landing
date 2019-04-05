import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Hidden } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  home: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#37474f"
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
        <AppBar position="fixed" color="default">
          <Hidden smDown>{this.Expanded(this.props)}</Hidden>
        </AppBar>
      </div>
    );
  }

  Expanded = ({ classes }) => (
    <Toolbar className={classes.ctaButton}>
      <div className={classes.home}>Map Pandas</div>
      <Button
        className={classes.ctaButton}
        color="primary"
        variant="outlined"
        href="https://app.mappandas.com"
      >
        Launch App
      </Button>
    </Toolbar>
  );
}

export default withStyles(styles)(NavBar);
