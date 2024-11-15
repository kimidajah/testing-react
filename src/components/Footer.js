import React from "react";

class Footer extends React.Component {
    constructor (props) {
        return super(props);
    }

  render() {
    return (
      <div>
        <h1>INI adalah footer </h1>
        <p>{this.props.text()}</p>
      </div>
    );
  }
}

export default Footer;
