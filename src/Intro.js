import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import classNames from "classnames";
import Subscribe from "./Subscribe";
import Type from "./Type";
import { ReactComponent as Growth } from "./growth.svg";
import ResponsiveLayout from "./ResponsiveLayout";
import LastN from "./feature/LastN";

const styles = theme => ({
  root: {
    //position: "absolute",
    display: "block",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    boxSizing: "border-box"

    //height: "100%"
  },
  baseText: {
    fontFamily: "'Cormorant Garamond', serif",
    color: "#455a64"
  },

  h1: {
    [theme.breakpoints.up("sm")]: {
      fontSize: "3.8em"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.4em"
    }
  },

  h2: {
    fontSize: "2.4em"
  },

  h3: {
    fontSize: "1.8em"
  },

  hero: {
    height: "75vh",
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
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
    textAlign: "center",
    color: "#455a64"
  },
  moreSection: {
    display: "block",
    background: "#fafafa",
    margin: `${theme.spacing.unit * 10}px auto`,
    textAlign: "center",
    boxSizing: "border-box"
  },
  moreText: {
    [theme.breakpoints.up("md")]: {
      margin: `${theme.spacing.unit * 10}px ${theme.spacing.unit * 20}px`
    },
    [theme.breakpoints.down("md")]: {
      padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`
    },
    boxSizing: "border-box"
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
    background: "#e0f7fa",
    borderRadius: "15px",
    border: "15px solid white",
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
    marginTop: theme.spacing.unit * 4
  }
});

class Intro extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <>
        <div class={classes.root}>
          <div className={classes.hero}>
            <ResponsiveLayout>
              <div className={classes.heroContent}>
                <BaseText headerClass="h1">
                  <b>Supercharge</b> your <b>blog</b> with <b>maps</b>
                </BaseText>

                <div
                  style={{
                    width: "70%",
                    margin: "28px auto",
                    padding: "30px",
                    borderRadius: "15px",
                    backgroundColor: "#e0f7fa",
                    opacity: 0.8,
                    border: "5px solid white"
                  }}
                >
                  <BaseText headerClass="h3">
                    Map Panda is a minimalist <b>blogging platform</b> with{" "}
                    <b>Maps</b>
                  </BaseText>
                  <Button
                    className={classes.ctaButton}
                    color="primary"
                    variant="outlined"
                    href="https://app.mappandas.com"
                  >
                    Start blogging
                  </Button>
                </div>
              </div>
            </ResponsiveLayout>
          </div>

          <div class={classes.moreSection}>
            <ResponsiveLayout>
              <div
                style={{
                  display: "block"
                }}
              >
                <div
                  style={{
                    fontSize: "1.5em",
                    lineHeight: "2em",
                    color: "#607d8b",
                    height: "2.5em",
                    padding: "10px",
                    display: "block"
                  }}
                >
                  <Type
                    strings={[
                      "Barcelona",
                      "Portland Mercado",
                      "3 Abbey Road, Westminster",
                      "Yelapa, Mexico",
                      "Chiang Mai"
                    ]}
                  />
                </div>
                <div className={classes.moreText}>
                  <BaseText headerClass="h2">
                    <b>
                      Our app lets you blog about places and add markers to maps
                      with ease
                    </b>
                  </BaseText>
                </div>
                <div
                  style={{
                    background: "#fafafa",
                    borderTop: "1px solid #efefef",
                    margin: "35px 35px"
                  }}
                />
                <div style={{ marginTop: 10 }}>
                  <LastN />
                </div>
              </div>
            </ResponsiveLayout>
          </div>
          <div className={classes.how}>
            <ResponsiveLayout>
              <Growth className={classes.growthSvg} />

              <BaseText headerClass="h2">How MapPandas works for you</BaseText>
              <BaseText headerClass="h1" styles={{ lineHeight: "1em" }}>
                <b>
                  <p>Entrepreneurs</p>
                  <p>Professional bloggers</p>
                  <p>Real estate businesses</p>
                </b>
              </BaseText>
              <BaseText headerClass="h2">
                Create effective blog contents with maps and grow more
                successful customers
              </BaseText>
            </ResponsiveLayout>
          </div>
        </div>
        <Subscribe />
      </>
    );
  }
}

const BaseText = withStyles(styles)(({ classes, headerClass, children }) => (
  <div
    className={classNames(
      classes.baseText,
      headerClass && classes[headerClass]
    )}
  >
    {children}
  </div>
));

export default withStyles(styles)(Intro);
