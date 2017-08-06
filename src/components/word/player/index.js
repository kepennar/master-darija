import { h, Component } from 'preact';
import IconToggle from 'preact-material-components/IconToggle';
import List from 'preact-material-components/List';

import style from './style';

export default class Player extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate({ stopIt, play }) {
    if (stopIt && this.props.play) {
      this.stop();
    } else if (play) {
      this.player.play();
      this.setState({ isPlaying: true });
    }
  }

  togglePlay() {
    const { play } = this.props;
    if (play) {
      this.stop();
    } else {
      this.play();
    }
  }

  play() {
    this.props.onPlay(this.props.soundSrc);
  }

  stop() {
    this.player.pause();
    this.player.currentTime = 0;
    this.props.onEnded(this.props.soundSrc);
  }

  render({ soundSrc, className, stopIt, play, onEnded }, { isPlaying }) {
    const pictoSrc = play
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
          onEnded={() => onEnded(soundSrc)}
        />
      </div>
    );
  }
}
