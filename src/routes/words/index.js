import { h, Component } from 'preact';
import Elevation from 'preact-material-components/Elevation';
import LayoutGrid from 'preact-material-components/LayoutGrid';

import Slider from '../../components/slider';
import Word from '../../components/word';

import { Categories, WordsRegistry } from '../../services';

import style from './style';

export default class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: null,
      stopIt: false
    };
  }

  componentWillMount() {
    this.words = WordsRegistry[this.props.category];
  }

  componentWillUpdate(nextProps, nextState) {
    const nextCategory = nextProps.category;
    if (this.props.category !== nextCategory) {
      this.slider.init();
      this.words = WordsRegistry[nextCategory];
    }
  }

  componentDidUpdate() {
    if (this.state.stopIt) {
      this.setState({ stopIt: false });
    }
  }

  onPlay = playingId => {
    this._changeWordPlaying(playingId);
  };

  onWordChange = index => {
    const { sound } = this.words[index];
    this._changeWordPlaying(sound);
  };

  onEnded = playingId => {
    if (this.state.playingId === playingId) {
      this.setState({
        playingId: null,
        stopIt: true
      });
    }
  };

  _changeWordPlaying(playingId) {
    this.setState({ playingId, stopIt: true });
  }

  _sliderRef = slider => {
    this.slider = slider;
  };

  // Note: `category` comes from the URL, courtesy of our router
  render({ category }, { stopIt, playingId }) {
    const categoryData = Categories.find(({ name }) => name === category);

    return (
      <div class={style.words}>
        <LayoutGrid className={style.layout}>
          <LayoutGrid.Inner className={style.gridInner}>
            <LayoutGrid.Cell cols="12" align="middle">
              <div class={style.container}>
                <Slider ref={this._sliderRef} onSlideChange={this.onWordChange}>
                  {this.words.map(({ sound, translations, image }) => (
                    <Word
                      soundSrc={sound}
                      translations={translations}
                      imgSrc={image}
                      onPlay={this.onPlay}
                      play={playingId === sound}
                      stopIt={stopIt && playingId !== sound}
                      onEnded={this.onEnded}
                      className={style.listItem}
                    />
                  ))}
                </Slider>
              </div>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
