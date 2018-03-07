import React from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import App from './app/app'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'
import reducer from './reducer'

const initialState = {
	api: {
		home: []
	},
	data: {
		panel: {}
	}
}

const store = createStore(
    reducer,
    initialState
)

const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=100'
axios.get(url)
	.then((response) => {
		store.dispatch({
			type: 'API',
			payload: response.data
		})
	})
	.catch((error) => console.log(error))

const $app = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
    	<Router>
        	<App />
        </Router>
    </Provider>,
    $app
)