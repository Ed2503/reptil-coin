import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter  } from 'react-router-dom'
import Main from '../main/main'
import Header from '../header/header'
import Footer from '../footer/footer'

class App extends Component {
	render() {
		return(
			<div id="container">
				<Header />
				<Main />
				<Footer />
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	return{

	}
}

export default withRouter(connect(mapStateToProps)(App))