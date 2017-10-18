import React, { Component } from 'react' 
import AppDispatcher from '../../Dispatcher/AppDispatcher' 
import AppStore from '../../Stores/AppStore'

export default class Style extends Component {
    getPageData(){
        AppDispatcher.dispatch({action: 'get-page-data', page_slug: 'Style'})
    }
    componentDidMount(){
        this.getPageData()
    }
    render(){
        return (
            <div>
                Style
            </div>
        )
    }
}