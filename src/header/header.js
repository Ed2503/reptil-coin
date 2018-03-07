import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="header-item-2">
					<div className="h-i-2">
						<Link exat className="link" to="/"><h3>Home</h3></Link>
					</div>

					<div className="h-i-2">
						<Link className="link" to="/Creditos"><h3>Creditos</h3></Link>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	return{

	}
}

export default withRouter(connect(mapStateToProps)(Header))

