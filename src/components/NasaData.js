import React, { Component } from "react";

class NasaData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }
  render() {
    const { data } = this.state;
    if (!data.length)
      return (
        <div>
          <h1> Fetching data.... </h1>{" "}
        </div>
      );
    return (
      <>
        <h1> Fetch data using Class component </h1>{" "}
        {data.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </>
    );
  }
}
