import { h, Component } from 'preact';

import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import { route as goTo } from 'preact-router';

export default ({ route, label, icon, svg, onClick }) =>
  <Drawer.DrawerItem
    onClick={() => {
      goTo(route);
      onClick();
    }}
  >
    {icon &&
      <List.ItemIcon>
        {icon}
      </List.ItemIcon>}
    {svg &&
      <List.ItemIcon>
        <img src={svg} />
      </List.ItemIcon>}
    {label}
  </Drawer.DrawerItem>;
