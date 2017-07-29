import { h } from 'preact';

import { route } from 'preact-router';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import CategoryItem from '../../components/category-card';

import categories from '../../services/Categories';
import style from './style';

export default () =>
  <div class={style.home}>
    <div class={style.title}>
      <h1>Master Darija</h1>
      <h2>Here are categories</h2>
    </div>
    <LayoutGrid>
      <LayoutGrid.Inner>
        {categories.map(({ name, svg }) =>
          <CategoryItem name={name} pictoUrl={svg} url={`/words/${name}`} />
        )}
      </LayoutGrid.Inner>
    </LayoutGrid>
  </div>;
