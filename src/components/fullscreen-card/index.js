import { h } from 'preact';
import Card from 'preact-material-components/Card';
import Icon from 'preact-material-components/Icon';

import style from './style';

export default ({ children, onClose }) => (
  <Card className={style.fullscreenCard}>
    <div class={style.closeBtn}>
      <i class={style.closeIcon} onClick={onClose} />
    </div>
    <Card.Primary className={style.cardContent}>{children}</Card.Primary>
  </Card>
);
