import React, { Component } from 'react' 
import AppDispatcher from '../../Dispatcher/AppDispatcher' 
import AppStore from '../../Stores/AppStore'

export default class Shop extends Component {
    getPageData(){
        AppDispatcher.dispatch({action: 'get-page-data', page_slug: 'Shop'})
    }
    componentDidMount(){
        this.getPageData()
    }
    render(){
        return (
            <div>
                
             <div id="ltkwidget-version-two800780643" data-appid="800780643" class="ltkwidget-version-two">
                <script>
                var rsLTKLoadApp = "0",
                    rsLTKPassedAppID = "800780643";
                </script>
                <script type="text/javascript" src="//widgets-static.rewardstyle.com/widgets2_0/client/pub/ltkwidget/ltkwidget.js"></script>
                <div widget-dashboard-settings="" data-appid="800780643" data-userid="270370" data-rows="3" data-cols="3" data-showframe="false"
                data-padding="4" data-displayname="amandalynjane">
                <div class="rs-ltkwidget-container">
                    <div ui-view=""></div>
                </div>
                </div>
                <noscript>This content requires JavaScript to be enabled, and the site or browser may be disabling it. Try reactivating it to view
                this content.</noscript>
            </div>



            </div>
        )
    }
}