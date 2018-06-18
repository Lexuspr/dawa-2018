import React,{Component} from 'react';

import axios from '../../axios-blog';
import Spinner from '../../components/UI/Spinner/Spinner';

export default class FullPost extends Component{
	state = {
		loaded: false,
		errorMessage: null
	}
	componentDidMount(){
		this.onNewPost(this.props.match.params.id);
	}
	componentWillReceiveProps(newProps){
		if(this.props.match.params.id!==newProps.match.params.id){
			this.setState({
				loaded: false,
				errorMessage: null
			});
			this.onNewPost(newProps.match.params.id);
		}
	}
	onNewPost(postId){
		// Aqui cargaremos nuestro post
		axios.get('posts/'+postId).then(response => this.setState({
			loaded: true,
			...response.data
		})).catch(err => this.setState({
			loaded: true,
			errorMessage: err
		}));
	}
	render(){
		let content = (<Spinner />);
		if(this.state.errorMessage) content = (<span>{this.state.errorMessage}</span>);
		if(this.state.loaded){
			content = (<div>
				<h2>{this.state.title}</h2>
				<h4>Escrito por {this.state.userId}</h4>
				<p>{this.state.body}</p>
			</div>);
		}
		return (content);
	}
}