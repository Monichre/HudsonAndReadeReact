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
import NewYork from './Components/Pages/NewYork'
import Travel from './Components/Pages/Travel'
import Style from './Components/Pages/Style'
import Wedding from './Components/Pages/Wedding'
import Wellness from './Components/Pages/Wellness'
import Shop from './Components/Pages/Shop'

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
		path: '/style',
		component: Style
    },
    {
		path: '/travel',
		component: Travel
    },
    {
		path: '/wellness',
		component: Wellness
    },
    {
		path: '/shop',
		component: Shop
    },
    {
		path: '/newyork',
		component: NewYork
    },
    {
		path: '/wedding',
		component: Wedding
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
       