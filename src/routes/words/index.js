import { h, Component } from 'preact';
import Elevation from 'preact-material-components/Elevation';
import LayoutGrid from 'preact-material-components/LayoutGrid';

import Slider from '../../components/slider';
import Word from '../../components/word';

import categories from '../../services/Categories';
import wordsRegistry from '../../services/words';

import style from './style';

export default class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: null,
      stopIt: false
    };
  }
  sliderRef = slider => {
    this.slider = slider;
  };
  onPlay = playingId => {
    this.setState({ playingId, stopIt: true });
  };

  componentWillUpdate(nextProps, nextState) {
    if (this.props.category !== nextProps.category) {
      this.slider.init();
    }
  }

  componentDidUpdate() {
    if (this.state.stopIt) {
      this.setState({ stopIt: false });
    }
  }

  // Note: `category` comes from the URL, courtesy of our router
  render({ category }, { containerWidth, stopIt, playingId }) {
    const categoryData = categories.find(({ name }) => name === category);
    const words = wordsRegistry[category];

    return (
      <div class={style.words}>
        <LayoutGrid className={style.layout}>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12" align="middle">
              <div>
                <Slider ref={this.sliderRef}>
                  {words.map(({ sound, translations, image }) =>
                    <Word
                      soundSrc={sound}
                      translations={translations}
                      imgSrc={image}
                      onPlay={this.onPlay}
                      stopIt={stopIt && playingId !== sound}
                      className={style.listItem}
                    />
                  )}
                </Slider>
              </div>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
