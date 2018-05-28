import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import classes from './App.css';

import Home from './components/Home/Home';
import Navbar from './components/UI/Navbar/Navbar';
import Blog from './containers/Blog/Blog';
import NewPost from './components/NewPost/NewPost';

class App extends Component {
  render(){
	return (
		<BrowserRouter>
			<div className={classes.App}>
				<Navbar />
				<h1>Blog de ejemplo</h1>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/new-post' component={NewPost} />
					<Route path='/posts/:id' component={Blog} />
					<Route path='/posts' component={Blog} />
					<Route render={() => <h1>Not found</h1>}/>
				</Switch>
			</div>
		</BrowserRouter>);
  }
}

export default App;
