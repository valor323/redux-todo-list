import React, { Component } from 'react';
import List from './list';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    	return (
      		<div className="container">
				<h1 className="center">To Do App</h1>
				<Route path='/' exact component={List}/>
      		</div>
    	);
  	}
}

export default App;
