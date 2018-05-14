import React from 'react';

import classes from './Post.css';

const post = (props) => (
	<div className={classes.Post}>
		<h3>{props.title}</h3>
		<span>Escrito por: {props.userId}</span> 
	</div>
	);

export default post;