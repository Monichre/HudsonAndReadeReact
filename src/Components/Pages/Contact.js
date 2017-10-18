import React, { Component } from 'react' 
import AppDispatcher from '../../Dispatcher/AppDispatcher' 
import AppStore from '../../Stores/AppStore'

export default class Contact extends Component {
    getPageData(){
        AppDispatcher.dispatch({action: 'get-page-data', page_slug: 'About'})
    }
    componentDidMount(){
        this.getPageData()
    }
    render(){
        return (
            <div>
                Contact
            </div>
        )
    }
}