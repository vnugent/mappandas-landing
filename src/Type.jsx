import React from "react";
import { Grow } from "@material-ui/core";

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
    const opts = {
      strings: this.props.strings,
      waitUntilVisible: true,
      breakLines: false,
      loop: true,
      loopDelay: 800,
      speed: 200,
      lifeLike: true,
      startDelay: 100,
      nextStringDelay: 7000,

      beforeString: (step, queue, instance) => {
        this.setState({ showIcon: false });
      },
      afterString: (step, queue, instance) => {
        this.setState({ showIcon: true });
      }
    };
    if (this.el) new Typeit(this.el, Object.assign({}, opts)).go();
  }

  render() {
    return (
      <div style={{
          margin: "10px"
      }}>
        <div
          ref={el => {
            this.el = el;
          }}
        />
        {this.state.showIcon && (
          <Grow in={true} timeout={1600}>
            <LocationOn color="primary" fontSize="large" />
          </Grow>
        )}
      </div>
    );
  }
}
