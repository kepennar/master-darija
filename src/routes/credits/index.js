import { h, Component } from 'preact';
import style from './style';

export default () => (
  <div class={style.credits}>
    <h1>Credits</h1>
    <ul>
      <li>
        Icon from <a href="https://flaticon.com">www.flaticon.com</a>{' '}
      </li>
      <li>An original idea from Nihad Amara</li>
      <li>
        This app is build with the help of the awesome
        <a href="https://github.com/developit/preact-cli">Preact-cli</a>
      </li>
    </ul>
  </div>
);
