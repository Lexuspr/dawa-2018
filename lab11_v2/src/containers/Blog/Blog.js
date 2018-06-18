import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import classes from './Blog.css';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';

import axios from '../../axios-blog';
import Spinner from '../../components/UI/Spinner/Spinner';

export default class Blog extends Component {
	state = {
		posts: null
	}
	componentDidMount(){
		// Aqui obtendremos nuestros posts
		axios.get('posts?_limit=3').then(response => this.setState({
			posts: response.data
		}));
	}
	onPostClickHandler = (postId) => {
		// Aqui cambiaremos de post
		this.props.history.push('/posts/'+postId);
	}
	render(){
		let content = (<Spinner />);
		if(this.state.posts!=null){
			content = this.state.posts.map(item => {
				return (<Post
					key={item.id}
					postId={item.id}
					title={item.title}
					userId={item.userId}
					clicked={this.onPostClickHandler} />);
			});
		}
		return(<div className={classes.Blog}>
			{content}
			<br />
			<hr />
			<Route path="/posts/:id" component={FullPost} />
		</div>);
	}
}