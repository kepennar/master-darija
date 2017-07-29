import { h, Component } from 'preact';

import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import { route as goTo } from 'preact-router';

import 'preact-material-components/List/style.css';

export default ({ route, label, icon, onClick }) =>
  <Drawer.DrawerItem
    onClick={() => {
      goTo(route);
      onClick();
    }}
  >
    <List.ItemIcon>
      {icon}
    </List.ItemIcon>
    {label}
  </Drawer.DrawerItem>;
