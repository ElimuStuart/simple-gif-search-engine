import React, { Component } from "react";

import SearchGif from "./SearchGif";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <SearchGif />
      </div>
    );
  }
}

export default App;
