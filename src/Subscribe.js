import React, { PureComponent } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex",
    alignItem: "center",
    minHeight: "60vh",
    background: "#f44336"
  },
  header: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#212121"
  },
  emailField: {
    background: "#fafafa",
    width: "300px"
  },
  ctaButton: {
    marginTop: theme.spacing.unit
  }
});

class Subscribe extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container={true} alignItems="center">
          <Grid item xs={12} md={4} />
          <Grid item xs={12} md={4}>
            <div className={classes.header}>
              Sign up for early access discount to the Pro and Business plans
            </div>
            <this.MailChimp classes={classes} />
          </Grid>
          <Grid item xs={12} md={4} />
        </Grid>
      </div>
    );
  }

  MailChimp = ({ classes }) => {
    return (
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=786601ed01260900f7a6d1546&amp;id=4e6bf36386"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL" />
            <TextField
              label="Email"
              className={classes.emailField}
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              margin="normal"
              variant="filled"
              type="email"
              name="EMAIL"
              required={true}
            />
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                //name="b_786601ed01260900f7a6d1546_4e6bf36386"
                tabindex="-1"
                value=""
              />
            </div>
            <div>
              <Button
                className={classes.ctaButton}
                type="submit"
                color="primary"
                variant="contained"
              >
                Sign up
              </Button>
            </div>
            <div className={classes.header} style={{ marginTop: "60px" }}>
              Questions or Comments? Email us:&nbsp;
              <a href="mailto:hola@mappandas.com">hola@mappandas.com</a>
            </div>
          </div>
        </form>
      </div>
    );
  };
}

export default withStyles(styles)(Subscribe);
