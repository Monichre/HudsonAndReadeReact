import React, { Component } from 'react' 
import AppDispatcher from '../../Dispatcher/AppDispatcher' 
import AppStore from '../../Stores/AppStore'

export default class Travel extends Component {
    getPageData(){
        AppDispatcher.dispatch({action: 'get-page-data', page_slug: 'Travel'})
    }
    componentDidMount(){
        this.getPageData()
    }
    render(){
        return (
            <div>
                Travel
            </div>
        )
    }
}