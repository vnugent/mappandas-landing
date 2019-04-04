import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    minHeight: "100vh"
  },
  table: {
    marginTop: theme.spacing.unit * 8
  },
  headerCell: {
    fontSize: "1.4em",
    color: "#fff",
    background: "#2C3E50",
    border: `${theme.spacing.unit * 2}px solid #fafafa`,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  ctaButton: {
    marginTop: theme.spacing.unit * 2
  },
  comingSoon: {
    fontSize: "0.5em"
  }
});

class Pricing extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container={true} alignItems="center">
          <Grid item xs={12} md={2} />
          <Grid item xs={12} md={8}>
            <Typography
              variant="h4"
              style={{
                lineHeight: "1.2"
              }}
            >
              Map Pandas plans and pricing
            </Typography>

            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{ verticalAlign: "bottom", fontSize: "1em" }}
                  >
                    Features
                  </TableCell>
                  <TableCell align="center" className={classes.headerCell}>
                    <div>
                      <div>Community</div>
                      <Button
                        className={classes.ctaButton}
                        color="primary"
                        variant="contained"
                        href="https://app.mappandas.com"
                      >
                        Start Blogging
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell align="center" className={classes.headerCell}>
                    <div>Pro</div>
                    <ComingSoon classes={classes} text="coming soon" />
                    <Button
                      className={classes.ctaButton}
                      color="primary"
                      variant="outlined"
                      component={Link}
                      to="/access"
                    >
                      Get Early Access
                    </Button>
                  </TableCell>
                  <TableCell align="center" className={classes.headerCell}>
                    <div>Business</div>
                    <ComingSoon classes={classes} text="coming soon" />
                    <Button
                      className={classes.ctaButton}
                      color="primary"
                      variant="outlined"
                      component={Link}
                      to="/access"
                    >
                      Get Early Access
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell align="center">Free</TableCell>
                  <TableCell align="center">
                    4.99/month billed annually
                  </TableCell>
                  <TableCell align="center">
                    199/month billed annually
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>What is it good for?</TableCell>
                  <TableCell align="center">Short one-off blog post</TableCell>
                  <TableCell align="center">Professional bloggers</TableCell>
                  <TableCell align="center">
                    Serious publishers who need to grow online business and need
                    guarantee uptime
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dashboard</TableCell>
                  <TableCell align="center">No</TableCell>
                  <TableCell align="center">Yes</TableCell>
                  <TableCell align="center">Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bring your own domain</TableCell>
                  <TableCell align="center">No</TableCell>
                  <TableCell align="center">No</TableCell>
                  <TableCell align="center">Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Technical support</TableCell>
                  <TableCell align="center">No</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">
                    Premium support. 99.9% uptime guarantee.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <Grid item xs={12} md={2} />
        </Grid>
      </div>
    );
  }
}

const ComingSoon = ({ classes, text }) => (
  <div className={classes.comingSoon}>{text}</div>
);

export default withStyles(styles)(Pricing);
