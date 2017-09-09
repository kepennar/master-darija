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

import 'preact-material-components/LayoutGrid/style';
import 'preact-material-components/Card/style';
import 'preact-material-components/Toolbar/style';
import 'preact-material-components/Drawer/style';
import 'preact-material-components/List/style';
import 'preact-material-components/IconToggle/style';
import 'preact-material-components/Button/style';
import 'preact-material-components/Elevation/style.css';

// import Home from 'async!./home';
// import Profile from 'async!./profile';

export default class App extends Component {
  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  constructor(props) {
    super(props);
    this.state.openMenu = false;
  }
  onOpenMenu(openMenu) {
    this.setState({ openMenu });
  }

  onRouteChange = ({ url }) => {
    if (typeof window !== 'undefined') {
      window.ga('set', 'page', url);
      window.ga('send', 'pageview');
    }
  };

  render(props, { openMenu }) {
    return (
      <div id="app">
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
