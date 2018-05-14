import React, {Component} from 'react';

import classes from './Posts.css';

import Post from '../../components/Post/Post';

export default class Posts extends Component{
	state = {
		posts: null
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
			.then(response => response.json())
			.then(json => this.setState({
				posts: json
			}))
	}
	render(){
		let listado = null;
		if(this.state.posts!=null){
			listado = this.state.posts.map(item => {
				return (<Post
					key={item.id}
					title={item.title}
					userId={item.userId} />);
			});
		}
		return (
			<div className={classes.Post}>
				{listado}
			</div>
		);
	}
}