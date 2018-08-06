import { h, Component } from 'preact';
import Elevation from 'preact-material-components/Elevation';

import style from './style';

export default ({ children, width, margin, active }) => (
  <div class={style.slide}>
    <div style={{ width, margin }}>
      <Elevation
        z4
        className={`${style.slideContent} ${active ? style.active : ''}`}
      >
        {children}
      </Elevation>
    </div>
  </div>
);
