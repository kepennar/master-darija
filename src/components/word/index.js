import Player from './player';
import Translations from './translations';

import style from './style'

export default ({
  translations,
  soundSrc,
  onPlay,
  stopIt,
  imgSrc,
  className
}) =>
  <div class={`${className} ${style.container}`}>
    <Player soundSrc={soundSrc} onPlay={this.onPlay} stopIt={stopIt} className={style.player}/>
    <Translations imgSrc={imgSrc} translations={translations} className={style.translations}/>
  </div>;
