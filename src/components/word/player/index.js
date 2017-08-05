import { h, Component } from 'preact';
import IconToggle from 'preact-material-components/IconToggle';
import List from 'preact-material-components/List';

import style from './style';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
  }

  componentWillUpdate({ stopIt, play }) {
    if (stopIt && this.state.isPlaying) {
      this.stop();
    } else if (play) {
      this.player.play();
      this.setState({ isPlaying: true });
    }
  }

  togglePlay() {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.stop();
    } else {
      this.play();
    }
    this.setState({ isPlaying: !isPlaying });
  }

  play() {
    this.props.onPlay(this.props.soundSrc);
  }

  stop() {
    this.player.pause();
    this.player.currentTime = 0;
  }

  render({ soundSrc, className, stopIt }, { isPlaying }) {
    const pictoSrc = isPlaying
      ? '/assets/icons/play-full.svg'
      : '/assets/icons/play-outline.svg';
    return (
      <div class={className}>
        <i
          class={style.control}
          onClick={e => {
            this.togglePlay();
            e.stopPropagation();
          }}
        >
          <img src={pictoSrc} />
        </i>

        <audio
          ref={ref => (this.player = ref)}
          src={soundSrc}
          class={style.player}
          preload="auto"
          autoPlay={false}
        />
      </div>
    );
  }
}