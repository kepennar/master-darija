import { h } from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import Card from 'preact-material-components/Card';
import { route } from 'preact-router';

import style from './style';

export default ({ name, pictoUrl, url }) =>
  <LayoutGrid.Cell cols="6">
    <Card className={style.categoryCard}>
      <Card.Primary>
        <Card.Title large>
          {name}
        </Card.Title>
        <Card.Subtitle>
          All about {name}
        </Card.Subtitle>
      </Card.Primary>
      <Card.MediaItem src={pictoUrl} x="1dot5" />
      <Card.Actions className={style.actions}>
        <Card.Action accent={true} onClick={() => route(url)}>Go</Card.Action>
      </Card.Actions>
    </Card>
  </LayoutGrid.Cell>;
