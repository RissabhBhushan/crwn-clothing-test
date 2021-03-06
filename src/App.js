import React from "react";

import { Route, Switch } from "react-router";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "../src/components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from '../src/firebase/firebase.utils';

class App extends React.Component {
  	constructor() {
    	super();

    	this.state = {
      		currentUser: null,
    	};
  	}

	unsubscribefromAuth = null;

	componentDidMount() {	
		this.unsubscribefromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribefromAuth();
	}

  	render() {
    	return (
      		<div className="App">
        		<Header currentUser={ this.state.currentUser } />
        		<Switch>
          			<Route exact path="/" component={ HomePage } />
          			<Route exact path="/shop" component={ ShopPage } />
          			<Route exact path="/signin" component={ SignInAndSignUpPage } />
        		</Switch>
      		</div>
    	);
  	}
}

export default App;