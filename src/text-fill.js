import React from "react";
import styles from "./text-fill.module.css";

class TextFill extends React.Component {
  render() {
    return (
      <div className={styles.textfill}>
        <div className={styles.inp}>
          <label htmlFor="xa" className={styles.inpa}>
            x<sub>a</sub>
          </label>
          <input
            id="xa"
            value={this.props.xa}
            onChange={e => this.props.setXA(e.target.value)}
            type="number"
          ></input>
          <label htmlFor="ya" className={styles.inpa}>
            y<sub>a</sub>
          </label>
          <input
            id="ya"
            value={this.props.ya}
            onChange={e => this.props.setYA(e.target.value)}
            type="number"
          ></input>
        </div>
        <div className={styles.inp}>
          <label htmlFor="xb" className={styles.inpb}>
            x<sub>b</sub>
          </label>
          <input
            id="xb"
            value={this.props.xb}
            onChange={e => this.props.setXB(e.target.value)}
            type="number"
          ></input>
          <label htmlFor="yb" className={styles.inpb}>
            y<sub>b</sub>
          </label>
          <input
            id="yb"
            value={this.props.yb}
            onChange={e => this.props.setYB(e.target.value)}
            type="number"
          ></input>
        </div>
        <div className={`${styles.inp}`}>
          <label htmlFor="sc">scale</label>
          <input
            id="sc"
            value={this.props.scale}
            onChange={e => this.props.setScale(e.target.value)}
            type="number"
          ></input>
          <label htmlFor="co">color</label>
          <input
            id="co"
            value={this.props.fillcolor}
            onChange={e => this.props.setColor(e.target.value)}
            type="text"
          ></input>
        </div>
      </div>
    );
  }
}

export default TextFill;
