import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid, Hidden, Paper } from "@material-ui/core";
import { AirplanemodeActive, Home } from "@material-ui/icons";
import Subscribe from "./Subscribe";
import Type from "./Type";
import { ReactComponent as Growth } from "./growth.svg";

const styles = theme => ({
  root: {
    //position: "absolute",
    display: "block",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center"
    //height: "100%"
  },
  hero: {
    height: "80vh",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottoom: "60px",
    width: "100%",
    backgroundImage: `url("assets/map-background.jpg")`,
    backgroundSize: "100%",
    animation: "animatedBackground 50s infinite linear"
  },
  heroPadding: { flex: 1 },
  heroContent: {
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    color: "#37474f",
    fontSize: "4em",
    [theme.breakpoints.up("sm")]: {
      fontSize: "4em"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em"
    }
  },
  more: {
    display: "block",
    background: theme.palette.secondary.light
  },
  moreText: {
    padding: theme.spacing.unit * 2,
    fontSize: "2em",
    fontFamily: "'Cormorant Garamond', serif",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  moreFigure: {
    padding: theme.spacing.unit * 2,
    display: "block",
    margin: "0 auto"
  },
  postcard: {
    border: "10px solid #fff",
    boxShadow: "2px 2px 8px 0px rgba(148,148,148,1)"
  },
  how: {
    background: "fafafa",
    textAlign: "center",
    color: "#37474f",
    fontFamily: "'Cormorant Garamond', serif",
    minHeight: "45vh",
    padding: theme.spacing.unit * 8
  },
  growthSvg: {
    height: "20vmin",
    pointerEvents: "none"
  },
  paper: {
    padding: 10,
    backgroundColor: "#e0f7fa"
  },
  ctaButton: {
    //marginTop: theme.spacing.unit * 4
  }
});

class Intro extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div class={classes.root}>
          <div className={classes.hero}>
            <Hidden smDown>
              <div class={classes.heroPadding}>&nbsp;</div>
            </Hidden>
            <div className={classes.heroContent}>
              <div>
                <b>Supercharge</b> your <b>blog</b> with <b>maps</b>
              </div>

              <div
                style={{
                  width: "80%",
                  margin: "28px auto",
                  padding: "18px",
                  borderRadius: "15px",
                  backgroundColor: "#e0f7fa",
                  fontSize: "0.4em",
                  lineHeight: "1.8em",
                  border: "5px solid white"
                }}
              >
                <div>
                  <b>A new blogging platform with Maps</b>
                </div>
                <div>
                  <Type
                    strings={[
                      "write about places",
                      "let Pandas add drop pins for you"
                    ]}
                    waitUntilVisible={true}
                    breakLines={false}
                    loop={true}
                    loopDelay={5000}
                    speed={180}
                    lifeLike={true}
                    nextStringDelay={7000}
                  />
                </div>
                <Button
                  className={classes.ctaButton}
                  color="primary"
                  variant="contained"
                  href="https://app.mappandas.com"
                >
                  Try It Now
                </Button>
              </div>
            </div>
            <Hidden smDown>
              <div class={classes.heroPadding} />
            </Hidden>
          </div>
          <div class={classes.more}>
            <Grid
              spacing={8}
              container={true}
              alignItems="center"
              alignContent="center"
            >
              <Grid item xs={0} md={2}>
                &nbsp;
              </Grid>

              <Grid item xs={12} md={4}>
                <div className={classes.moreText}>
                  We take the work out of <b>building maps</b> so you can focus
                  on <b>writing content</b>
                </div>
              </Grid>
              <Grid item={true} xs={12} md={4}>
                <figure className={classes.moreFigure}>
                  <img
                    alt="Screenshot of Map Pandas"
                    style={{
                      maxWidth: "100%"
                      //   height: "auto"
                    }}
                    className={classes.postcard}
                    src="assets/chicago.jpg"
                  />
                  <figcaption style={{ color: "#a0a0a0", marginLeft: "15px" }}>
                    created by Vilija J.
                  </figcaption>
                </figure>
              </Grid>
              <Grid item xs={0} md={2}>
                &nbsp;
              </Grid>
            </Grid>
          </div>
          <div className={classes.how}>
            <div className={classes.moreText}>
              <p>
                <b>How MapPandas works for you</b>
              </p>
              <p>Entrepreneurs</p>
              <p>Professional bloggers</p>
              <p>Real estate businesses</p>
              <b>
                Create effective blog contents with maps and grow more
                successful customers
              </b>
            </div>
            <Growth className={classes.growthSvg} />

            <Grid container spacing={8} style={{ marginTop: "15px" }}>
              <Grid item xs={0} md={3}>
                &nbsp;
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={classes.paper}>
                  <p>
                    <AirplanemodeActive />
                  </p>
                  <p>24 Hours in Bogota, Colombia</p>

                  <Button
                    className={classes.ctaButton}
                    color="primary"
                    variant="outlined"
                    href="https://app.mappandas.com/p/3f8bb7b0-5659-11e9-8dfe-51c68035038c"
                  >
                    View example
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={classes.paper}>
                  <p>
                    <Home />
                  </p>
                  <p>Real easte listings</p>
                  <Button
                    className={classes.ctaButton}
                    color="primary"
                    variant="outlined"
                    href="https://app.mappandas.com/p/78079160-56fc-11e9-96e0-19185548dc28"
                  >
                    View example
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={0} md={3}>
                &nbsp;
              </Grid>
            </Grid>
          </div>
        </div>
        <Subscribe />
      </>
    );
  }
}

export default withStyles(styles)(Intro);
