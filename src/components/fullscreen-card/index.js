import { h } from 'preact';
import Card from 'preact-material-components/Card';

import style from './style';

export default ({ children, onClose, fadeIn }) => (
  <Card
    className={`${style.fullscreenCard} ${fadeIn ? style.fadeInAnimation : ''}`}
  >
    <div class={style.closeBtn}>
      <i class={style.closeIcon} onClick={onClose} />
    </div>
    <div className={style.cardContent}>{children}</div>
  </Card>
);
