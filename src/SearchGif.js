import React, { Component } from "react";

class SearchGif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      img: ""
    };
  }

  render() {
    return (
      <div>
        <p>Search for Gif</p>
      </div>
    );
  }
}

export default SearchGif;
