import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import { route as goTo } from 'preact-router';

import FullscreenCard from '../../components/fullscreen-card';
import LetterBubbleGraph from '../../components/letters-bubble-graph';
import LetterPicto from '../../components/letter-picto';

import style from './style';

export default class TutorialSecond extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: null,
      stopIt: false
    };
  }

  componentDidUpdate() {
    if (this.state.stopIt) {
      this.setState({ stopIt: false });
    }
  }

  onPlay = playingId => {
    this._changeLetterPlaying(playingId);
  };

  onLetterChange = letter => {
    if (this.state.selected !== letter) {
      this.setState({ selected: letter });
    }
    // this._changeLetterPlaying(sound);
  };

  onEnded = playingId => {
    if (this.state.playingId === playingId) {
      this.setState({
        playingId: null,
        stopIt: true
      });
    }
  };

  _changeLetterPlaying(playingId) {
    this.setState({ playingId, stopIt: true });
  }

  render({}, { stopIt, playingId, selected }) {
    return (
      <div class={style.tutorial}>
        <FullscreenCard onClose={() => goTo('/home')}>
          {!selected ? <h1>Alphabet</h1> : <LetterPicto letter={selected} />}

          <p>
            In this app we will use the web arabic alphabet.
            <LetterBubbleGraph
              select={({ value }) => this.onLetterChange(value)}
            />
          </p>

          <div class={style.bottomButton}>
            <Button onClick={() => goTo('/tutorial/0')} ripple={true}>
              ← Back
            </Button>
            <Button
              className={style.nextButton}
              onClick={() => goTo('/home')}
              ripple={true}
              primary={true}
              stroked={true}
            >
              Let's go
            </Button>
          </div>
        </FullscreenCard>
      </div>
    );
  }
}
