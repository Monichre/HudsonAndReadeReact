import React, { Component } from 'react'

export default class Header extends Component {

    componentDidMount(){
        
    }
    

    render() {
        const hero_image = this.props.data.globals.hero_image
        const header_style = {
            backgroundImage: `url(${hero_image})`
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
                                            <li className="active"><a href="index.html" title="Start">Home</a></li>
                                            <li><a href="gallery-categories.html" title="Photos">Photos</a></li>
                                            <li><a href="blog.html" title="Blog">Blog</a></li>
                                            <li><a href="contact.html" title="Contact">Contact</a></li>
                                            <li><a href="about.html" title="About me">About me</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <header id="mobile-nav" className="header_dynamic header_brown header_static_nav mobile-hide">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-3 social-nav-container">
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
                            </div>
                            <div className="col-xs-6 mobile-nav-main">
                                <nav>
                                    <ul>
                                        <li className=""><a href="index.html" title="Start">Home</a></li>
                                        <li><a href="gallery-categories.html" title="Photos">Photos</a></li>
                                        <li><a href="blog.html" title="Blog">Blog</a></li>
                                        <li><a href="contact.html" title="Contact">Contact</a></li>
                                        <li><a href="about.html" title="About me">About me</a></li>
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
                        </div>
                    </div>
                </header>
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
                        </div>

                    </div>

                </section>
            </div>

        )
    }
}