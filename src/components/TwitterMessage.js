import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { maxChars: this.props.maxChars };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.maxChars}
        />
      </div>
    );
  }
}

export default TwitterMessage;
