import { h, Component } from "preact";

import style from "./style.scss";

export default class LetterBubbleGraph extends Component {
  onChange = datas => {
    const selected = datas.nodes.find(({ id }) => {
      return id === "center";
    });
    this.props.select(selected);
  };

  async vizRef(svg) {
    if (typeof window !== "undefined" && !this.init) {
      const onChange = this.onChange;
      const {
        default: lettersBubleGraph
      } = await import("./letters-bubble-graph");
      lettersBubleGraph(svg, onChange);
      this.init = true;
    }
  }

  render() {
    return (
      <svg class={style.graph} ref={svg => this.vizRef(svg)}>
        <defs>
          <filter id="drop-shadow" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
            <feOffset in="blur" dx="1" dy="1" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    );
  }
}
