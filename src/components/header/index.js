import { h } from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import style from './style';

export default ({ onOpenMenu }) => (
  <div class={style.toolbar}>
    <Toolbar>
      <Toolbar.Row>
        <Toolbar.Section className={style.flagSection} align-start>
          <Toolbar.Icon
            className={style.flagTitle}
            onClick={evt => {
              evt.preventDefault();
              onOpenMenu(true);
            }}
          />
        </Toolbar.Section>
        <Toolbar.Section align-start>
          <Toolbar.Title className={style.title}>Master Darija</Toolbar.Title>
        </Toolbar.Section>
      </Toolbar.Row>
    </Toolbar>
  </div>
);
