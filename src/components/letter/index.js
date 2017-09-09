import Player from '../player';

import style from './style';

export default ({
  translations: { web, arabic },
  soundSrc,
  onPlay,
  play,
  onEnded,
  stopIt,
  className
}) => (
  <div class={style.letterContainer}>
    <div class={style.translations}>
      {web} : {arabic}
    </div>
    <Player
      soundSrc={soundSrc}
      onPlay={onPlay}
      play={play}
      stopIt={stopIt}
      onEnded={onEnded}
      className={style.player}
    />
  </div>
);
