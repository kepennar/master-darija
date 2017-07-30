import { h, Component } from 'preact';
import Elevation from 'preact-material-components/Elevation';
import LayoutGrid from 'preact-material-components/LayoutGrid';

import Player from '../../components/player';
import style from './style';

import categories from '../../services/Categories';
import wordsRegistry from '../../services/words';

export default class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: null,
      stopIt: false
    };
  }

  onPlay = playingId => {
    this.setState({ playingId, stopIt: true });
  };
  componentDidUpdate() {
    if (this.state.stopIt) {
      this.setState({ stopIt: false });
    }
  }
  // Note: `category` comes from the URL, courtesy of our router
  render({ category }, { stopIt, playingId }) {
    const categoryData = categories.find(({ name }) => name === category);
    const words = wordsRegistry[category];

    return (
      <div class={style.words}>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="12">
              <div class={style.title}>
                <img class={style.picto} src={categoryData.svg} />
                <h1>
                  {categoryData.label}
                </h1>
              </div>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12" align="middle">
              <div class={style.wordsList}>
                <Elevation z1>
                  {words.map(({ sound, translations }) =>
                    <Player
                      src={sound}
                      words={translations}
                      onPlay={this.onPlay}
                      stopIt={stopIt && playingId !== sound}
                      className={style.listItem}
                    />
                  )}
                </Elevation>
              </div>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}
