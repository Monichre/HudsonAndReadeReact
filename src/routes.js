// routes.js
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

// Store
import AppDispatcher from './Dispatcher/AppDispatcher'
import AppStore from './Stores/AppStore'

// Pages
import App from './App'
import Home from './Components/Pages/Home'
import Blog from './Components/Pages/Blog'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'

let routes_with_sub = [
    {
        path: '/',
		exact: true,
        component: Home
    }, {
        path: '/about',
		exact: true,
        component: About
    },
	{
		path: '/blog',
		component: Blog
	},
	{
		path: '/contact',
		component: Contact
    }
]

export default (
    
        <div>
            {routes_with_sub.map((route, i) => (
                <Route exact path={route.path} render={(props) => (
                    <route.component key={i} data={AppStore.data} {...props} />
                    )}
                />
            ))}
        </div>
    )
       