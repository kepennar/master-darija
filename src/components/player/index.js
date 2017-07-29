import { h, Component } from 'preact';
import IconToggle from 'preact-material-components/IconToggle';
import List from 'preact-material-components/List';

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
  }

  stop() {
    this.player.pause();
    this.player.currentTime = 0;
  }

  render({ src, arabic, darija, english, className}) {
    return (
      <List.Item className={className}>
        <List.TextContainer>
          <List.PrimaryText>
            <IconToggle
              role="button"
              tabindex="0"
              aria-pressed="false"
              aria-label="Add to favorites"
              data-toggle-on={toggleOnIcon}
              data-toggle-off={toggleOffIcon}
              onClick={() => this.togglePlay()}
            >
              play_circle_outline
            </IconToggle>
            <audio
              ref={ref => (this.player = ref)}
              src={src}
              class={style.player}
              preload="auto"
              autoPlay={false}
            />
          </List.PrimaryText>
          <List.SecondaryText>
            {arabic} - {darija} - {english}
          </List.SecondaryText>
        </List.TextContainer>
      </List.Item>
    );
  }
}
