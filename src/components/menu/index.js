import { h, Component } from 'preact';
import Drawer from 'preact-material-components/Drawer';
import MenuItem from './menu-item';

import categories from '../../services/Categories';

import style from './style';

export default class Menu extends Component {
  drawerRef = (drawer) =>  {
    this.drawer = drawer;
  }
  componentDidUpdate() {
    this.drawer.MDComponent.open = this.props.open;
  }
  render({ open, onOpenMenu }) {
    
    return (
      <div>
        <Drawer.TemporaryDrawer className="mdc-typography mdc-temporary-drawer"
          ref={this.drawerRef}
        >
          <MenuItem
            route="/"
            label="Home"
            icon="home"
            onClick={() => onOpenMenu(false)}
          />
          <MenuItem
            route="/credits"
            label="Credits"
            icon="people"
            onClick={() => onOpenMenu(false)}
          />
          <Drawer.TemporaryDrawerHeader className={`mdc-temporary-drawer__header ${style.header}`}>
            Categories
          </Drawer.TemporaryDrawerHeader>
          {categories.map(({ label, svg, name }) =>
            <MenuItem
              route={`/words/${name}`}
              label={label}
              svg={svg}
              onClick={() => onOpenMenu(false)}
            />
          )}
        </Drawer.TemporaryDrawer>
      </div>
    );
  }
}
