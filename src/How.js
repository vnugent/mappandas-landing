import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Grid } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex"
    // minHeight: "100vh"
  },
  bullet: {
    background: "#d1c4e9",
    padding: "5px",
    borderRadius: "5px",
    fontSize: "1.4em",
    fontWeight: "500",
    textAlign: "center",
    verticalAlign: "middle",
    marginRight: theme.spacing.unit
  },
  postcard: {
    border: "10px solid #fff",
    boxShadow: "2px 2px 8px 0px rgba(148,148,148,1)"
  },
  ctaButton: {
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit
  }
});

class How extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container={true} alignItems="center">
          <Grid item xs={12} md={1} />

          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                fontFamily:
                  "Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace"
              }}
            >
              No coding required
            </Typography>
            <Typography
              variant="h3"
              style={{
                marginTop: "45px",
                lineHeight: "1.2"
              }}
            >
              Write and make maps using our distraction-free editor
            </Typography>

            <Button
              className={classes.ctaButton}
              color="primary"
              variant="contained"
              href="https://app.mappandas.com"
            >
              Try It Now
            </Button>
            <Button
              className={classes.ctaButton}
              color="primary"
              variant="outlined"
              component={Link}
              to="/pricing"
            >
              See Pricing
            </Button>
          </Grid>
          <Grid item xs={12} md={5}>
            <img
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              className={classes.postcard}
              //width={350}
              borderColor="grey"
              src="landing.gif"
              alt="Animated gif of map pandas editor"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(How);
