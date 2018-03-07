import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Target from './target'

class Home extends Component {
	state = {
		acum: 0
	}
	render() {
		return(
			<div className="home">
				<h1 className="home-title">Bienvenidos a ReptilCoin</h1>
				<h2 className="home-sub-title">
					Información más relevante sobre el mercado de las criptomonedas
				</h2>
				<div className="grid">
				<div className="grid-tab">
					<h2>Rango</h2>
					<h2>Nombre</h2>
					<h2>Valor</h2>
				</div>
					{
						this.props.data.map((item) => {
							this.state.acum++
							return <Target 
								key={this.state.acum}
								name={item.name}
								item={item}
								rank={item.rank}
								price={item.price_usd}
							/>
						})
					}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, props) {
	return{
		data: state.api.home
	}
}

export default connect(mapStateToProps)(Home)