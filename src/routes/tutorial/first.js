import { h } from 'preact';
import Button from 'preact-material-components/Button';
import { route as goTo } from 'preact-router';

import FullscreenCard from '../../components/fullscreen-card';
import style from './style';

export default () => (
  <div class={style.tutorial}>
    <FullscreenCard fadeIn onClose={() => goTo('/home')}>
      <h1>Welcome to Master Darija</h1>
      <h3>The best place to learn Darija</h3>
      <img class={style.tutoImage} src="/assets/tarboosh.svg" />
      <hr />
      <p>
        <b>Darija</b> is the Morrocan arabic dialect
      </p>

      <div class={style.bottomButton}>
        <Button onClick={() => goTo('/home')} ripple={true}>
          Skip
        </Button>
        <Button
          className={style.nextButton}
          onClick={() => goTo('/tutorial/1')}
          ripple={true}
          primary={true}
          stroked={true}
        >
          Next →
        </Button>
      </div>
    </FullscreenCard>
  </div>
);
