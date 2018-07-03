import { h } from 'preact';

import LayoutGrid from 'preact-material-components/LayoutGrid';
import CategoryItem from '../../components/category-card';

import { Categories } from '../../services';
import style from './style';

export default () => (
  <div class={style.home}>
    <LayoutGrid>
      <LayoutGrid.Inner>
        {Categories.map(({ name, svg }) => (
          <CategoryItem name={name} pictoUrl={svg} url={`/words/${name}`} />
        ))}
      </LayoutGrid.Inner>
    </LayoutGrid>
  </div>
);
