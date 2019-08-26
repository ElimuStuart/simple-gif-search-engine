import React, { Component } from "react";

class SearchGif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      img: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const apiKey = "dc6zaTOxFJmzC";
    const url = `http://api.giphy.com/v1/gifs/search?q=${
      this.state.term
    }&api_key=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ term: "", img: data.data[0].images.fied_height.url })
      )
      .catch(e => console.log("error", e));
  };

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <p>Search for Gif</p>
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.term} onChange={this.onChange} />
          <button>Search</button>
        </form>

        <img src={this.state.img} alt={this.state.term} />
      </div>
    );
  }
}

export default SearchGif;
