import { h, Component } from 'preact';
import style from './style';

export default () =>
  <div class={style.credits}>
    <h1>Credits</h1>
    <ul>
      <li>Icon from www.flaticon.com </li>
      <li>An original idea from Nihad Amara</li>
    </ul>
  </div>;
