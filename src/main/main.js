import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import Home from '../home/home'
import Panel from '../panel/panel'
import Creditos from '../creditos/creditos'

class Main extends Component {
	render() {
		return(
			<div className="main">
				<Route className='rutueo' exact path="/" component={Home} />
				<Route className='rutueo' exact path="/Panel/:id" component={Panel} />
				<Route className='rutueo' exact path="/Creditos" component={Creditos} />
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	return{

	}
}

export default withRouter(connect(mapStateToProps)(Main))