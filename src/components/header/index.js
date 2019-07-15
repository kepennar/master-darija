import { h } from "preact";
import TopAppBar from "preact-material-components/TopAppBar";
import Elevation from "preact-material-components/Elevation";

import style from "./style.scss";

export default ({ onOpenMenu }) => (
  <div class={style.TopAppBar}>
    <TopAppBar>
      <TopAppBar.Row>
        <TopAppBar.Section className={style.flagSection} align-start>
          <Elevation z={2} className={style.flagElevation}>
            <TopAppBar.Icon
              className={style.flagTitle}
              onClick={evt => {
                evt.preventDefault();
                onOpenMenu(true);
              }}
            />
          </Elevation>
        </TopAppBar.Section>
        <TopAppBar.Section>
          <TopAppBar.Title className={style.title}>
            Master Darija
          </TopAppBar.Title>
        </TopAppBar.Section>
      </TopAppBar.Row>
    </TopAppBar>
  </div>
);
