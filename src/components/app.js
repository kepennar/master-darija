import { h, Component } from "preact";
import { Router, route as goTo } from "preact-router";

import Header from "./header";
import Menu from "./menu";

import TutoFirst from "../routes/tutorial/first";
import TutoSecond from "../routes/tutorial/second";

import Home from "../routes/home";
import Words from "../routes/words";
import Credits from "../routes/credits";

import { getHammer } from "../Hammer";
import FirstVisitRedirect from "./firstVisitRedirect";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  constructor(props) {
    super(props);
    this.setState({ openMenu: false });
  }

  appRef = app => {
    if (this._hammer) {
      this._unregisterHammer();
    }
    if (app) {
      this._hammer = getHammer(
        app,
        {
          direction: Hammer.DIRECTION_RIGHT,
          domEvents: true
        },
        {
          onSwipeRight: () => {
            this.onOpenMenu(true);
          }
        }
      );
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
    if (typeof window !== "undefined" && window.ga) {
      window.ga("set", "page", url);
      window.ga("send", "pageview");
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
