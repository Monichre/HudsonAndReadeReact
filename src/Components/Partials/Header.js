import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AppStore from '../../Stores/AppStore'
import AppDispatcher from '../../Dispatcher/AppDispatcher'

{/* <div className="col-xs-3 social-nav-container">
                                        <nav>
                                            <ul className="social-nav">
                                                <li className="">
                                                    <span className="icon icon-facebook"></span>
                                                </li>
                                                <li className="">
                                                    <span className="icon icon-twitter"></span>
                                                </li>
                                                <li className="">
                                                    <span className="icon icon-dribbble"></span>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div> */}

export default class Header extends Component {

    componentDidMount() {

    }
    componentWillMount() {
        this.getPageData()
    }
    getPageData() {
        AppDispatcher.dispatch({
            action: 'get-page-data',
            page_slug: this.props.data.page

        })
    }



    render() {


        const navItems = this.props.data.nav_items.map((navItem) => {
            return <li><Link to={`/${navItem}`}>{navItem}</Link></li>
        })
        const nav_style = {
            textAlign: 'center'
        }
        const data = AppStore.data
        console.log(data)
        const page = data.page
        console.log(page)


        const header_style = {
            backgroundImage: 'url(' + page.fields.mainPhoto.fields.file.url + ')'
        }

        return (
            <div>
                <div id="nav_overlay" className="menu_overlay">
                    <div className="nav-overlay-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="menu close_btn">
                                        <a href="#">
                                            <span data-icon="&#x4d;"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-overlay-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <nav>
                                        <ul>
                                            {navItems}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="full_slider full_slider_skew" style={header_style} data-rjs="2">
                    <div className="full_slider_bg_skew"></div>
                    <div className="full_slider_one full_slider_one_white">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h2><span id="slider-animation"></span></h2>
                                    <h1>Hudson + Reade</h1>
                                </div>
                            </div>
                            <div className="row">
                                <header id="mobile-nav" className="header_dynamic header_brown header_static_nav mobile-hide">
                                    <div className="col-xs-12 mobile-nav-main">
                                        <nav>
                                            <ul style={nav_style}>
                                                {navItems}
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-xs-3">
                                        <div className="logo"><a href="index.html" title="AJ">H+R</a></div>
                                        <div className="menu">
                                            <a href="#">
                                                <span data-icon="&#x61;"></span>
                                            </a>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}