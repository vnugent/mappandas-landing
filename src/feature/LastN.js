import * as React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Value } from "slate";
import * as RestClient from "../RestClient";
import PandaCard from "./PandaCard";
const MAX_LIMIT = 8;

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    width: "100%"
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2
  }
});

class LastN extends React.Component {
  interval;

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getAsyncData();
    this.interval = setInterval(() => {
      //this.getAsyncData();
    }, 25000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getAsyncData = () => {
    RestClient.getLastN(MAX_LIMIT).then(_data => {
      this.setState({ data: _data });
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid
          className={classes.root}
          container
          direction="row"
          //justify="center"
          alignItems="center"
          spacing={16}
        >
          <this.CTA />
          {this.list()}
        </Grid>
      </div>
    );
  }

  list = () => {
    return this.state.data.map((entry, index) => {
      const slateContent = Value.fromJSON(entry.data);
      const figures = slateContent.document.nodes
        .filter(node => node.type === "figure")
        .toArray();
      const cards = slateContent.document.nodes
        .filter(node => node.type === "card")
        .filter(card => card.nodes.some(node => node.type === "figure"));
      cards.forEach(card => {
        card.nodes.forEach(node => {
          if (node.type === "figure") {
            figures.push(node);
          }
        });
      });
      const imageUrls = figures.map(fig => fig.nodes.first().data.get("url"));
      const randomImageUrl =
        imageUrls[Math.floor(Math.random() * imageUrls.length)];
      if (!randomImageUrl) return null;
      return (
        <Grid
          item={true}
          wrap="nowrap"
          zeroMinWidth={true}
          xs={12}
          sm={6}
          md={4}
          lg={3}
        >
          <PandaCard
            title={entry.title}
            imageUrl={randomImageUrl}
            uuid={entry._id}
          />
        </Grid>
      );
    });
  };

  CTA = () => (
    <Grid item={true} wrap="nowrap" xs={12} sm={6} md={4} lg={3}>
      <PandaCard cta={true} />
    </Grid>
  );
}

export default withStyles(styles)(LastN);
