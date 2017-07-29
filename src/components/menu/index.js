import { h, Component } from 'preact';
import Drawer from 'preact-material-components/Drawer';
import MenuItem from './menu-item';

import 'preact-material-components/Drawer/style.css';

export default class Menu extends Component {
  componentDidUpdate() {
    this.drawer.MDComponent.open = this.props.open;
  }
  render({ open, onOpenMenu }) {
    return (
      <div>
        <Drawer.TemporaryDrawer
          ref={drawer => {
            this.drawer = drawer;
          }}
        >
          <Drawer.TemporaryDrawerHeader className="mdc-theme--primary-bg">
            Categories
          </Drawer.TemporaryDrawerHeader>
          <MenuItem
            route="/"
            label="Home"
            icon="home"
            onClick={() => onOpenMenu(false)}
          />
          <MenuItem
            route="/eat"
            label="Eat"
            icon="restaurant_menu"
            onClick={() => onOpenMenu(false)}
          />
          <MenuItem
            route="/family"
            label="Family"
            icon="persons"
            onClick={() => onOpenMenu(false)}
          />
        </Drawer.TemporaryDrawer>
      </div>
    );
  }
}
