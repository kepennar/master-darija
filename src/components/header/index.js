import { h } from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import Elevation from 'preact-material-components/Elevation';

import style from './style';

export default ({ onOpenMenu }) => (
  <div class={style.toolbar}>
    <Toolbar>
      <Toolbar.Row>
        <Toolbar.Section className={style.flagSection} align-start>
          <Elevation z={2} className={style.flagElevation}>
            <Toolbar.Icon
              className={style.flagTitle}
              onClick={evt => {
                evt.preventDefault();
                onOpenMenu(true);
              }}
            />
          </Elevation>
        </Toolbar.Section>
        <Toolbar.Section>
          <Toolbar.Title className={style.title}>Master Darija</Toolbar.Title>
        </Toolbar.Section>
      </Toolbar.Row>
    </Toolbar>
  </div>
);
