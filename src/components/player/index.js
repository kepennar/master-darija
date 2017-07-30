import { h, Component } from 'preact';
import IconToggle from 'preact-material-components/IconToggle';
import List from 'preact-material-components/List';

import style from './style';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
  }

  componentWillUpdate({ stopIt }) {
    if (stopIt && this.state.isPlaying) {
      this.stop();
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
    this.player.play();
    this.props.onPlay(this.props.src);
  }

  stop() {
    this.player.pause();
    this.player.currentTime = 0;
  }

  render(
    { src, words: { arabic, darija, english }, className, stopIt },
    { isPlaying }
  ) {
    const pictoSrc = isPlaying
      ? '/assets/icons/play-full.svg'
      : '/assets/icons/play-outline.svg';
    return (
      <div class={className}>
        <i class={style.control} onClick={() => this.togglePlay()}>
          <img src={pictoSrc} />
        </i>

        <audio
          ref={ref => (this.player = ref)}
          src={src}
          class={style.player}
          preload="auto"
          autoPlay={false}
        />
        <p>
          <div>
            {arabic}
          </div>
          <div>
            {darija}
          </div>
          <div>
            {english}
          </div>
        </p>
      </div>
    );
  }
}
