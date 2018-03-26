import { h, Component } from 'preact';

import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import { route as goTo } from 'preact-router';

import style from './style';

export default ({ route, label, icon, svg, onClick }) => (
  <Drawer.DrawerItem
    className={`mdc-list-item ${style.menuItem}`}
    onClick={() => {
      goTo(route);
      onClick();
    }}
  >
    {icon && <List.ItemGraphic>{icon}</List.ItemGraphic>}
    {svg && (
      <List.ItemGraphic>
        <img src={svg} />
      </List.ItemGraphic>
    )}
    {label}
  </Drawer.DrawerItem>
);
