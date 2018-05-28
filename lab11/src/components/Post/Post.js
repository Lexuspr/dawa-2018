import React,{Component} from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import classes from './Post.css';

class Post extends Component{
	// Declaramos la función onPostClick con la sintaxis de arrow function
	// de no hacerlo así, no tendríamos acceso a this
	onPostClick = () => {
		this.props.clicked(this.props.postId);
	}
	render(){
		let content = (<div className={classes.Post} onClick={this.onPostClick}>
		    <span><strong>{this.props.title}</strong></span><br />
		    <span style={{fontSize: 'smaller'}}>Escrito por: {this.props.userId}</span>
		</div>);
		return (<Aux>
			{content}
		</Aux>);
	}
}

export default Post;