import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Menu from './menu';
import Home from '../routes/home';
import Words from '../routes/words';
import Credits from '../routes/credits';
import 'preact-material-components/style.css';
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

  render(props, { openMenu }) {
    return (
      <div id="app">
        <Header onOpenMenu={val => this.onOpenMenu(val)} />
        <Menu open={openMenu} onOpenMenu={val => this.onOpenMenu(val)} />
        <Router>
          <Home path="/" />
          <Words path="/words/:category" />
          <Credits path="credits" />
        </Router>
      </div>
    );
  }
}
