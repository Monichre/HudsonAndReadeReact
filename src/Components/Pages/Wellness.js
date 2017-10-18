import React, { Component } from 'react' 
import AppDispatcher from '../../Dispatcher/AppDispatcher' 
import AppStore from '../../Stores/AppStore'

export default class Wellness extends Component {
    getPageData(){
        AppDispatcher.dispatch({action: 'get-page-data', page_slug: 'Wellness'})
    }
    componentDidMount(){
        this.getPageData()
    }
    render(){
        return (
            <div>
                Wellness
            </div>
        )
    }
}