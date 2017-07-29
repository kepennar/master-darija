import { h } from 'preact';
import { Link } from 'preact-router/match';
import Toolbar from 'preact-material-components/Toolbar';
import style from './style';

import 'preact-material-components/Toolbar/style.css';

export default ({ onOpenMenu }) =>
  <div class={style.toolbar}>
    <Toolbar>
      <Toolbar.Row>
        <Toolbar.Section align-start={true}>
            <Toolbar.Title className={style.flagTitle} onClick={() => onOpenMenu(true)} />
        </Toolbar.Section>
        <Toolbar.Section shrink-to-fit={true}>
          <Toolbar.Title className={style.title}>Master Darija</Toolbar.Title>
        </Toolbar.Section>
        <Toolbar.Section align-end={true}>
          An original idea from Nihad Amara
        </Toolbar.Section>
      </Toolbar.Row>
    </Toolbar>
  </div>;
