import React from "react";
import styles from "./draw-canvas.module.css";

class DrawCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cwidth: window.innerWidth - 50,
      cheight: window.innerHeight - 180,
      toolarge: false
    };

    window.addEventListener("resize", () => {
      this.setState({
        cwidth: window.innerWidth - 50,
        cheight: window.innerHeight - 180
      });
    });
  }
  DDAbase(xa, ya, xb, yb) {
    let plotmap = [];
    let dx = xb - xa,
      dy = yb - ya,
      steps,
      k,
      xi,
      yi,
      x = xa,
      y = ya;
    const { abs, round } = Math;
    if (abs(dx) > abs(dy)) steps = abs(dx);
    else steps = abs(dy);
    xi = dx / steps;
    yi = dy / steps;

    plotmap.push({
      x: round(x),
      y: round(y)
    });
    for (k = 0; k < steps; k++) {
      x += xi;
      y += yi;
      plotmap.push({
        x: round(x),
        y: round(y)
      });
    }
    return plotmap;
  }

  lineDDA(ctx, xa, ya, xb, yb, scale = 10) {
    let toolarge = false;
    this.DDAbase(xa, ya, xb, yb).forEach(({ x, y }) => {
      if (x * scale > this.state.cwidth || y * scale > this.state.cheight)
        toolarge = true;
      else ctx.fillRect(x * scale, y * scale, scale, scale);
    });
    if (this.state.toolarge !== toolarge) this.setState({ toolarge });
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = this.props.fillcolor;
    this.lineDDA(
      ctx,
      this.props.xa,
      this.props.ya,
      this.props.xb,
      this.props.yb,
      this.props.scale
    );
  }

  componentDidUpdate() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = this.props.fillcolor;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.lineDDA(
      ctx,
      this.props.xa,
      this.props.ya,
      this.props.xb,
      this.props.yb,
      this.props.scale
    );
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <canvas
          width={this.state.cwidth}
          height={this.state.cheight}
          className={`${styles.canva} ${
            this.state.toolarge ? styles.canva_warn : ""
          }`}
          ref="canvas"
        ></canvas>
        <div
          className={styles.warn}
          style={{
            width: this.state.cwidth,
            height: this.state.cheight
          }}
        >
          <p
            style={{
              visibility: !this.state.toolarge ? "hidden" : "visible",
              color: !this.state.toolarge ? "#f57f1700" : "#f57f17ff"
            }}
          >
            Warning: The line is longer than the canvas size!
          </p>
        </div>
      </div>
    );
  }
}

export default DrawCanvas;
