import { h, Component } from 'preact';
import Drawer from 'preact-material-components/Drawer';
import MenuItem from './menu-item';

import categories from '../../services/Categories';

import style from './style';

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
          <Drawer.TemporaryDrawerHeader className={style.header}>
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
