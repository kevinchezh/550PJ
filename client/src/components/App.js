import React, {Component} from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import SearchResult from './SearchResult';
import PlayerIndex from './Player/PlayerIndex';

import TeamIndex from './Team/TeamIndex';

import TrivialDetail from './Trivial/TrivialDetail';
import TrivialCard from './Trivial/TrivialCard';
import Profile from './Profile/Profile';
//allow components to call action creaters
import {connect} from 'react-redux';
import * as actions from '../actions';


class App extends Component {
	//when this component mounts up, use the action creater to fetch the user
	componentDidMount(){
		this.props.fetchUser();
	}
	render() {
		return (
			<BrowserRouter>
			<div className="container">
				<Header />
				
				<Switch>
					<Route path = "/trivial/detail" component = {TrivialDetail} />
					<Route path = "/player/index" component={PlayerIndex} />
					<Route path = "/team/index" component={TeamIndex} />
					<Route exact path="/" component={Landing} />
					<Route exact path="/SearchResult" component={SearchResult} />
					<Route exact path="/profile" component={Profile} />
				</Switch>
			</div>
			</BrowserRouter>
		);
	}
}

export default connect(null, actions)(App);