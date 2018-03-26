import { h } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import Card from 'preact-material-components/Card';
import Button from 'preact-material-components/Button';
import { route } from 'preact-router';

import style from './style';

export default ({ name, pictoUrl, url }) => (
  <LayoutGrid.Cell cols="4">
    <Card className={style.categoryCard}>
      <div class={style.cardHeader}>
        <h2 class="mdc-typography--title">{name}</h2>
        <div class="mdc-typography--caption">All about {name}</div>
      </div>
      <Card.Media className={style.cardMedia}>
        <img className={style.picto} src={pictoUrl} />
      </Card.Media>
      <Card.Actions className={style.actions}>
        <Card.ActionButton
          raised
          className={style.button}
          onClick={() => route(url)}
        >
          Go
        </Card.ActionButton>
      </Card.Actions>
    </Card>
  </LayoutGrid.Cell>
);
