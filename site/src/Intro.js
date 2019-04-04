import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid } from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";

import How from "./How";
import Pricing from "./Pricing";
import Subscribe from "./Subscribe";

const styles = theme => ({
  root: {
    //position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    height: "100%"
  },
  hero: {
    display: "flex",
    background: theme.palette.secondary.light
  },
  heroPadding: {
    [theme.breakpoints.up("sm")]: {
      width: "300px"
    }
  },
  heroContent: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      width: "580px",
      paddingTop: "150px",
      paddingBottom: "80px"
      // flexShrink: 2
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing.unit * 4
    }
  },
  more: {
    //flexGrow: 4,
    display: "flex",
    marginTop: theme.spacing.unit * 8

    // [theme.breakpoints.up("sm")]: {
    //   paddingLeft: "100px"
    // }
  },
  postcard: {
    border: "10px solid #fff",
    boxShadow: "2px 2px 8px 0px rgba(148,148,148,1)"
  },
  ctaButton: {
    marginTop: theme.spacing.unit * 4
  }
});

class Intro extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div class={classes.root}>
          <div class={classes.hero}>
            <div class={classes.heroPadding}>&nbsp;</div>
            <div class={classes.heroContent}>
              <Typography variant="h3" style={{ lineHeight: "1.2" }}>
                All-in-one publishing platform that helps you create blog
                <span style={{ color: "red" }}> contents </span>
                with <span style={{ color: "red" }}> maps </span>
              </Typography>
              <Button
                className={classes.ctaButton}
                color="primary"
                variant="contained"
                href="https://app.mappandas.com"
              >
                Try It Now
              </Button>
            </div>
            <div class={classes.heroPadding}>&nbsp;</div>
          </div>
          <div class={classes.more}>
            <Grid spacing={24} container={true} alignContent="stretch">
              <Grid item xs={12} md={2} />
              <Grid item xs={12} md={4}>
                <img
                  alt="Screenshot of Map Pandas"
                  style={{ maxWidth: "100%", height: "auto" }}
                  className={classes.postcard}
                  src="assets/chicago.jpg"
                />
                <figcaption style={{ color: "#a0a0a0", marginLeft: "15px" }}>
                  created by Vilija J.
                </figcaption>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="h4"
                  style={{
                    textAlign: "left",
                    alignSelf: "center",
                    paddingTop: "10px",
                    paddingRight: "10px",
                    lineHeight: "1.2"
                  }}
                >
                  We take the work out of building custom maps so you can focus
                  on writing content
                </Typography>
                <Button
                  className={classes.ctaButton}
                  color="primary"
                  variant="outlined"
                  component={Link}
                  to="/how-it-works"
                >
                  How It Works <ArrowDownward />
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <How />
        <Pricing />
        <Subscribe />
      </>
    );
  }
}

export default withStyles(styles)(Intro);
