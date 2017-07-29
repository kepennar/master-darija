import { h } from 'preact';

import { route } from 'preact-router';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import Card from 'preact-material-components/Card';

import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

import style from './style';

export default () =>
  <div class={style.home}>
    <div class={style.title}>
      <h1>Master Darija</h1>
      <h2>Here are categories</h2>
    </div>
    <LayoutGrid>
      <LayoutGrid.Inner>
        <LayoutGrid.Cell cols="6">
          <Card>
            <Card.Primary>
              <Card.Title large>Eat</Card.Title>
              <Card.Subtitle>All about eat</Card.Subtitle>
            </Card.Primary>
            <Card.Media className="card-media" />
            <Card.Actions>
              <Card.Action onClick={() => route('eat')}>Go</Card.Action>
            </Card.Actions>
          </Card>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="6">
          <Card>
            <Card.HorizontalBlock>
              <Card.Primary>
                <Card.Title large>Family</Card.Title>
                <Card.Subtitle>All about family</Card.Subtitle>
              </Card.Primary>
              <Card.MediaItem src="some-picture.jpg" x="1dot5" />
            </Card.HorizontalBlock>
            <Card.Actions>
              <Card.Action onClick={() => route('family')}>Go</Card.Action>
            </Card.Actions>
          </Card>
        </LayoutGrid.Cell>
      </LayoutGrid.Inner>

      <LayoutGrid.Inner>
        <LayoutGrid.Cell cols="6">
          <Card>
            <Card.Primary>
              <Card.Title large>Eat</Card.Title>
              <Card.Subtitle>All about eat</Card.Subtitle>
            </Card.Primary>
            <Card.Media className="card-media" />
            <Card.Actions>
              <Card.Action onClick={() => route('eat')}>Go</Card.Action>
            </Card.Actions>
          </Card>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="6">
          <Card>
            <Card.HorizontalBlock>
              <Card.Primary>
                <Card.Title large>Family</Card.Title>
                <Card.Subtitle>All about family</Card.Subtitle>
              </Card.Primary>
              <Card.MediaItem src="some-picture.jpg" x="1dot5" />
            </Card.HorizontalBlock>
            <Card.Actions>
              <Card.Action onClick={() => route('family')}>Go</Card.Action>
            </Card.Actions>
          </Card>
        </LayoutGrid.Cell>
      </LayoutGrid.Inner>
    </LayoutGrid>
  </div>;
