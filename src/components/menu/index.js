import { h, Component } from 'preact';
import Drawer from 'preact-material-components/Drawer';
import MenuItem from './menu-item';

import { Categories } from '../../services';

import style from './style';

export default class Menu extends Component {
  drawerRef = drawer => {
    this.drawer = drawer;
  };
  componentDidUpdate() {
    this.drawer.MDComponent.open = this.props.open;
  }
  render({ open, onOpenMenu }) {
    return (
      <div>
        <Drawer.TemporaryDrawer
          className="mdc-typography mdc-temporary-drawer"
          ref={this.drawerRef}
        >
          <MenuItem
            route="/"
            label="Home"
            svg="/assets/icons/home.svg"
            onClick={() => onOpenMenu(false)}
          />
          <MenuItem
            route="/credits"
            label="Credits"
            svg="/assets/icons/peoples.svg"
            onClick={() => onOpenMenu(false)}
          />
          <MenuItem
            route="/tutorial/0"
            label="Tutorial"
            svg="/assets/icons/question.svg"
            onClick={() => onOpenMenu(false)}
          />
          <Drawer.TemporaryDrawerHeader
            className={`mdc-temporary-drawer__header ${style.header}`}
          >
            Categories
          </Drawer.TemporaryDrawerHeader>
          {Categories.map(({ label, svg, name }) => (
            <MenuItem
              route={`/words/${name}`}
              label={label}
              svg={svg}
              onClick={() => onOpenMenu(false)}
            />
          ))}
        </Drawer.TemporaryDrawer>
      </div>
    );
  }
}
