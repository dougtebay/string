import React, { Component } from 'react';

import Note from './Note.jsx';

export default class App extends Component {
	getNotes() {
		return [
			{ _id: 1, text: 'This is Note 1' },
			{ _id: 2, text: 'This is Note 2' },
			{ _id: 3, text: 'This is Note 3' },
		];
	}

	renderNotes() {
		return this.getNotes().map((note) => (
			<Note key={note._id} note={note} />
		));
	}

	render() {
		return (
			<div className="container">
				<header>
					<h1>Notes List</h1>
				</header>

				<ul>
					{this.renderNotes()}
				</ul>
			</div>
		);
	}
}
