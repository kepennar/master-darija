import { h, Component } from 'preact';
import { route as goTo } from 'preact-router';

const FIRSTIME_TOKEN = 'isFistTime';

export default class FirstVisitRedirect extends Component {
  componentWillMount() {
    if (typeof window !== 'undefined') {
      const isFirstTime = window.localStorage.getItem(FIRSTIME_TOKEN);
      if (isFirstTime === 'false') {
        goTo('/home');
      }
      window.localStorage.setItem(FIRSTIME_TOKEN, false);
    }
  }

  render({ children }) {
    return { children };
  }
}
