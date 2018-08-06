import { h, Component } from 'preact';

import style from './style';

export default class LetterBubbleGraph extends Component {
  onChange = datas => {
    const selected = datas.nodes.find(({ id }) => {
      return id === 'center';
    });
    this.props.select(selected);
  };

  vizRef(svg) {
    if (typeof window !== 'undefined' && !this.init) {
      const onChange = this.onChange;
      import('./letters-bubble-graph').then(lettersBubleGraph => {
        lettersBubleGraph.default(svg, onChange);
        this.init = true;
      });
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
