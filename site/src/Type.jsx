import React from "react";

const Typeit = require("typeit");

export default class Type extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("#typit", this.el);
    if (this.el) new Typeit(this.el, this.props).go();
  }

  render() {
    return (
      <span
        ref={el => {
          this.el = el;
        }}
      >
        {this.props.children}
      </span>
    );
  }
}
