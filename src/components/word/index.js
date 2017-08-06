import Player from './player';
import Translations from './translations';

import style from './style'

export default ({
  translations,
  soundSrc,
  onPlay,
  play,
  onEnded,
  stopIt,
  imgSrc,
  className
}) =>
  <div class={`${className} ${style.container}`}>
    <Player soundSrc={soundSrc} onPlay={onPlay} play={play} stopIt={stopIt} onEnded={onEnded} className={style.player}/>
    <Translations imgSrc={imgSrc} translations={translations} className={style.translations}/>
  </div>;
