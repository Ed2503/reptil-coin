import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Target extends React.Component {
	state = {}
	handlePanel = (event) => {
		this.props.dispatch({
			type: 'PANEL',
			payload: this.props.item
		})
	}
	render() {
		return(
			<div className="target" onClick={this.handlePanel}>
			<Link className="target-link" to={`/Panel/${this.props.name}`}/>
				<div className="target-item target-item-rank"><h3>{this.props.rank}</h3></div>
				<div className="target-item target-item-name"><h3>{this.props.name}</h3></div>
				<div className="target-item target-item-price"><h3>${this.props.price} USD</h3></div>
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	return{

	}
}

export default connect(mapStateToProps)(Target)