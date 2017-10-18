
import React, { Component } from 'react' 
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import routes from './routes'


// Dispatcher
import AppDispatcher from './Dispatcher/AppDispatcher'

// Store
import AppStore from './Stores/AppStore'

import Header from './Components/Partials/Header'
import Footer from './Components/Partials/Footer'



class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			removeLoader: false
		}

	}
	// Add change listeners to stores
	componentDidMount() {
		AppStore.addChangeListener(this._onChange.bind(this))


		
	}

	// Remove change listeners from stores
	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange.bind(this))
	}

	getStore() {
		AppDispatcher.dispatch({
			action: 'get-app-store'
		})
	}
	componentWillMount() {
		
		this.getStore()
	}

	_onChange() {
		this.setState(AppStore)
	}

	render() {
		const data = AppStore.data
		console.log(data)
		// const page = AppStore.data.page
		if(!data.ready){
		      this.getStore()

		      return (
		        <div className="container text-center"></div>
		      )
			}
			return (
				<BrowserRouter>
					<div>
						<Header data={data}/>
						{routes}
						<Footer data={data} />
					</div>
				</BrowserRouter>

			)
	}
}

export default App;
