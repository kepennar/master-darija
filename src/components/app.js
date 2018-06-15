import { h, Component } from 'preact';
import { Router, route as goTo } from 'preact-router';

import Header from './header';
import Menu from './menu';

import TutoFirst from '../routes/tutorial/first';
import TutoSecond from '../routes/tutorial/second';

import Home from '../routes/home';
import Words from '../routes/words';
import Credits from '../routes/credits';

import FirstVisitRedirect from './firstVisitRedirect';

const getHammer = () => (typeof window !== 'undefined' ? window.Hammer : null);

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  constructor(props) {
    super(props);
    this.state.openMenu = false;
  }

  appRef = app => {
    if (this._hammer) {
      this._unregisterHammer();
    }
    const hammer = getHammer();
    if (hammer && app) {
      this._hammer = hammer(app);
      this._hammer
        .get('swipe')
        .set({ direction: Hammer.DIRECTION_RIGHT, domEvents: true });
      this._hammer.on('swipe', evt => {
        if (evt.direction === 4) {
          this.onOpenMenu(true);
        }
      });
    }
  };

  _unregisterHammer() {
    if (this._hammer) {
      this._hammer.stop();
      this._hammer.destroy();
    }
    this._hammer = null;
  }

  onOpenMenu(openMenu) {
    this.setState({ openMenu });
  }

  onRouteChange = ({ url }) => {
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('set', 'page', url);
      window.ga('send', 'pageview');
    }
  };

  render(props, { openMenu }) {
    return (
      <div id="app" ref={this.appRef}>
        <Header onOpenMenu={val => this.onOpenMenu(val)} />
        <Menu open={openMenu} onOpenMenu={val => this.onOpenMenu(val)} />
        <Router onChange={this.onRouteChange}>
          <FirstVisitRedirect path="/">
            <TutoFirst />
          </FirstVisitRedirect>
          <Home path="/home" />
          <Words path="/words/:category" />

          <TutoFirst path="/tutorial/0" />
          <TutoSecond path="/tutorial/1" />

          <Credits path="credits" />
        </Router>
      </div>
    );
  }
}
