import { h, Component } from 'preact';
import List from 'preact-material-components/List';

import Player from '../../components/player';
import style from './style';

import categories from '../../services/Categories';
import wordsRegistry from '../../services/Words';

export default class Words extends Component {
  // Note: `category` comes from the URL, courtesy of our router
  render({ category }, {}) {
    const categoryData = categories.find(({ name }) => name === category);
    const words = wordsRegistry[category];

    return (
      <div class={style.words}>
        <img class={style.picto} src={categoryData.svg} />
        <h1>
          {categoryData.label}
        </h1>
        <List two-line={true} className={style.list}>
          {words.map(({ sound, arabic, darija, english }) =>
            <Player
              src={sound}
              arabic={arabic}
              darija={darija}
              english={english}
              className={style.listItem}
            />
          )}
        </List>
      </div>
    );
  }
}
