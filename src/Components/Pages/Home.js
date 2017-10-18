import React, { Component } from 'react' 
import AppDispatcher from '../../Dispatcher/AppDispatcher' 
import AppStore from '../../Stores/AppStore'
import Blog from './Blog'

export default class Home extends Component {
    getPageData(){
        AppDispatcher.dispatch({action: 'get-page-data', page_slug: 'Home'})
    }
    componentWillMount(){
        this.getPageData()
    }
    render(){
    

        return (
            <div>
                  <Blog />
            </div>
        )
    }
}