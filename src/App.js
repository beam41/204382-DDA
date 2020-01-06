import React from "react";
import DrawCanvas from "./draw-canvas";
import styles from "./App.module.css";
import TextFill from "./text-fill";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xa: 5,
      ya: 5,
      xb: 25,
      yb: 38,
      scale: 10,
      fillcolor: "#000000"
    };
    this.setXA = this.setXA.bind(this);
    this.setYA = this.setYA.bind(this);
    this.setXB = this.setXB.bind(this);
    this.setYB = this.setYB.bind(this);
    this.setScale = this.setScale.bind(this);
    this.setColor = this.setColor.bind(this);
  }

  setXA(input) {
    if (input)
      this.setState({ xa: Math.min(Math.max(parseInt(input, 10), 0), 10000) });
    else if (input === "") this.setState({ xa: 0 });
  }

  setYA(input) {
    if (input)
      this.setState({ ya: Math.min(Math.max(parseInt(input, 10), 0), 10000) });
    else if (input === "") this.setState({ ya: 0 });
  }

  setXB(input) {
    if (input)
      this.setState({ xb: Math.min(Math.max(parseInt(input, 10), 0), 10000) });
    else if (input === "") this.setState({ xb: 0 });
  }

  setYB(input) {
    if (input)
      this.setState({ yb: Math.min(Math.max(parseInt(input, 10), 0), 10000) });
    else if (input === "") this.setState({ yb: 0 });
  }

  setScale(input) {
    if (input)
      this.setState({
        scale: Math.min(Math.max(parseInt(input, 10), 0), 10000)
      });
    else if (input === "") this.setState({ scale: 0 });
  }

  setColor(input) {
    this.setState({
      fillcolor:
        "#" +
        input
          .replace(/^[#]+/g, "")
          .replace(/[^\da-f]+/g, "")
          .slice(0, 6)
    });
  }

  render() {
    return (
      <div className="App">
        <div className={styles.container}>
          <DrawCanvas {...this.state} />
        </div>
        <TextFill
          {...this.state}
          setXA={this.setXA}
          setYA={this.setYA}
          setXB={this.setXB}
          setYB={this.setYB}
          setScale={this.setScale}
          setColor={this.setColor}
        />
      </div>
    );
  }
}

export default App;
