import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Panel extends Component {
	state = {}
	render() {
		return(
			<div className="panel">
				<h1>{this.state.name}</h1>
				<h3>Market Cap</h3>
				<h4>{this.state.market_cap_usd}</h4>
				<div className="panel-item">
					<div className="panel-i">
						<h3>Precio</h3>
						<h5>Precio en USD: {this.state.price_usd}</h5>
						<h5>Precio en BTC: {this.state.price_btc}</h5>
					</div>
					<div className="panel-i">
						<h3>Supply</h3>
						<h6>Max supply: {this.state.max_supply}</h6>
						<h6>Disponible: {this.state.available_supply}</h6>
					</div>
					<div className="panel-i">
						<h3>Procentajes</h3>
						<h6>Hace 1h: {this.state.percent_change_1h}</h6>
						<h6>Hace 24h: {this.state.percent_change_7d}</h6>
						<h6>Hace 7d: {this.state.percent_change_24h}</h6>					
					</div>
				</div>
			</div>
		)
	}
	componentWillMount() {
		const url = `https://api.coinmarketcap.com/v1/ticker/${this.props.match.params.id.toLowerCase()}/`
		axios.get(url)
			.then((response) => {
				this.setState({
					...response.data[0]
				})
			})
			.catch((error) => console.error('ajax no conseguida'))
	}
}

function mapStateToProps(state, props) {
	return {
		name: state.data.panel.name
	}
}

export default connect(mapStateToProps)(Panel)