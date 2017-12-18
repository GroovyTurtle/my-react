import React, { Component } from 'react';
// import { value, styler, physics, listen } from 'popmotion';
import './App.css';

class App extends Component {
	render() {

		let commits = {
			14: {
				name: 'Project 1',
				url: 'www.google.se'
			},
			25: {
				name: 'Project 2',
				url: 'www.google.se'
			},
			32: {
				name: 'Project 3',
				url: 'www.google.se'
			},
			49: {
				name: 'Project 4',
				url: 'www.google.se'
			}
		}

		/* eslint-disable no-unused-vars */
		function appendCommits() {

			let commitsSinceLastAdded = 0;
			let elementsToReturn = [];

			for (let i = 0; i < 52; i++) {
				if (commits[i] !== undefined) {
					commitsSinceLastAdded += 1;
					elementsToReturn.push(<div key={'commit' + i} className={'flexItemStyle flexItemColor1'} href={commits[i].url}>{commits[i].name}</div>);
				}
				else {
					let addCommit = Math.floor(Math.random() * 4 + 1 + commitsSinceLastAdded);
					var commitColor = Math.ceil(Math.random() * 3);

					if (addCommit >= 3) {
						commitsSinceLastAdded = 0;
						elementsToReturn.push(<div key={'commit' + i} className={'flexItemStyle flexItemColor' + commitColor}></div>);
					}
					else {
						elementsToReturn.push(<div key={'commit' + i} className="flexItemStyle"></div>);
					}
				}
			}
			return elementsToReturn;
		}
		/* eslint-enable no-unused-vars */

		// HTML

		return (
			<div className="App">
				<div className="flexContainerStyle">
					{appendCommits()}
				</div>
			</div>
		);
	}
}

// var square = document.querySelector('.flexItemStyle');
// var squareY = value(0, styler(square).set('y'));

// var gravity = physics({
//   acceleration: 2500,
//   restSpeed: false
// }).start(squareY);

// listen(square, 'mousedown touchstart').start(() => {
//   gravity
//     .set(squareY.get())
//     .setVelocity(-1200);
// });

export default App;