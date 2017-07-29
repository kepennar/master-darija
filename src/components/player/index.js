import { h, Component } from 'preact';
import IconToggle from 'preact-material-components/IconToggle';
import 'preact-material-components/IconToggle/style';

import style from './style';

const toggleOnIcon = {
  content: 'play_circle_filled',
  label: 'Stop'
};
const toggleOffIcon = {
  content: 'play_circle_outline',
  label: 'Play'
};
export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
  }
  play() {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.player.pause();
      this.player.currentTime = 0;
    } else {
      this.player.play();
    }
    this.setState({ isPlaying: !isPlaying });
  }

  render({ src, label }) {
    return (
      <div>
        <IconToggle
          role="button"
          tabindex="0"
          aria-pressed="false"
          aria-label="Add to favorites"
          data-toggle-on={toggleOnIcon}
          data-toggle-off={toggleOffIcon}
          onClick={() => this.play()}
        >
          play_circle_outline
        </IconToggle>
        {label}
        <audio
          ref={ref => (this.player = ref)}
          src={src}
          class={style.player}
          preload="auto"
          autoPlay={false}
        />
      </div>
    );
  }
}
