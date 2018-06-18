import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from '../../axios-blog.js';

import classes from './NewPost.css';

class NewPost extends Component {
	state = {
		title: '',
		content: '',
		author: 'Tecsup',
		submitted: false
	}
	postDataHandler = () => {
		// Aqui enviaremos nuestra data al servidor
		const data = {
			title: this.state.title,
			body: this.state.content,
			author: this.state.author
		};
		axios.post('posts',data).then(response => this.props.history.replace('/posts/'+response.data.id));
	}
	render() {
		let redirect = null;
		if(this.state.submitted){
			redirect = <Redirect to='/posts' />;
		}
		return (
			<div className={classes.NewPost}>
				{redirect}
				<h1>Agregar un Post</h1>
				<label>Titulo</label>
				<input
					type='text' value={this.state.title} 
					onChange={( event ) => this.setState({title: event.target.value})} />
				<label>Contenido</label>
				<textarea rows='4' value={this.state.content}
					onChange={( event ) => this.setState({content:event.target.value})} />
				<label>Autor</label>
				<select value={this.state.author}
					onChange={(event) => this.setState({author: event.target.value})}>
					<option value='Dawa'>Dawa</option>
					<option value='Tecsup'>Tecsup</option>
				</select>
				<button onClick={this.postDataHandler}>Agregar Post</button>
			</div>
		);
	}
}

export default NewPost;