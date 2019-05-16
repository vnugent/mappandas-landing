import React from "react";

import { LocationOn } from "@material-ui/icons";
const Typeit = require("typeit");

export default class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIcon: false
    };
  }

  componentDidMount() {
    console.log("#typit", this.el);
    if (this.el)
      new Typeit(this.el, this.props)
        .pause(800)

        .exec(async () => {
          this.setState({ showIcon: true });
        })
        .pause(2000)
        .empty()
        .exec(async () => {
          this.setState({ showIcon: false });
        })
        .go();
  }

  render() {
    return (
      <div
        ref={el => {
          this.el = el;
        }}
      >
        {this.state.showIcon && <LocationOn  />}
      </div>
    );
  }
}
