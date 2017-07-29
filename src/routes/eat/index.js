import { h, Component } from 'preact';

import Player from '../../components/player'
import style from './style';

export default class Profile extends Component {
	// Note: `user` comes from the URL, courtesy of our router
	render() {
		return (
			<div class={style.eat}>
				<h1>Eat</h1>
				<Player src="assets/test.mp3" label="Test sound 1"/>
				<Player src="assets/test.mp3" label="Test sound again"/>
			</div>
		);
	}
}
