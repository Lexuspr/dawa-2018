import React from 'react';

import imgGato from '../../assets/gato.jpg'

const home = () => {
	let greeting = (<span>Bienvenido usuario</span>);
	const name = localStorage.getItem('name');
	if(name) greeting = (<span>Bienvenido {name}</span>);
	return (
		<div>
			<h1>Pagina de inicio de nuestro Blog</h1>
			{greeting}
			<hr />
			<img src={imgGato} alt="Gato" style={{
				maxHeight: '250px'
			}} />
		</div>
	);
}

export default home;