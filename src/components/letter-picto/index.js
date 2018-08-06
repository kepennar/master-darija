import { h, Component } from 'preact';

import style from './style';

export default class LetterPicto extends Component {
  constructor() {
    super();
    this.state = { unmount: false };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.letter !== this.props.letter) {
      this.setState({ unmount: true });
      requestAnimationFrame(() => this.setState({ unmount: false }));
    }
  }
  render({ letter }, { unmount }) {
    return !unmount && <div class={style.picto}>{letter}</div>;
  }
}
