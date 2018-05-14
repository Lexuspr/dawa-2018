import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import classes from './NewPost.css';

class NewPost extends Component {
	state = {
		title: '',
		content: '',
		author: 'Tecsup',
		submitted: false
	}

	componentDidMount () {
		console.log( this.props);
	}

	postDataHandler = () => {
		const data = {
			title: this.state.title,
			body: this.state.content,
			author: this.state.author
		};
		fetch('https://jsonplaceholder.typicode.com/posts',{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)	
		}).then(response => this.props.history.replace('/posts') )
	}
	render () {
		let redirect = null;
		if (this.state.submitted) {
			redirect = <Redirect to="/posts" />;
		}
		return (
			<div className={classes.NewPost}>
				{redirect}
				<h1>Add a Post</h1>
				<label>Title</label>
				<input
					type="text" value={this.state.title}
					onChange={( event ) => this.setState( { title: event.target.value } )} />
				<label>Content</label>
				<textarea rows="4" value={this.state.content}
					onChange={( event ) => this.setState( { content: event.target.value } )} />
				<label>Author</label>
				<select value={this.state.author}
					onChange={( event ) => this.setState( { author: event.target.value } )}>
					<option value="Dawa">Dawa</option>
					<option value="Tecsup">Tecsup</option>
				</select>
				<button onClick={this.postDataHandler}>Add Post</button>
			</div>
			);
	}
}

export default NewPost;