import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="logo">
                        <a href="index.html" className="site-title">
                            Selah <span>Lash</span>
                        </a>
                    </div>


                    <button className="main-menu-indicator" id="open-button">
                        <span className="line"></span>
                    </button>

                    <div className="menu-wrap">
                        <div className="menu-content">
                            <div className="navigation">
                                <span className="pe-7s-close close-menu" id="close-button"></span>
                                <div className="search-wrap js-ui-search">
                                    <input className="js-ui-text" type="text" placeholder="Search Here..."/>
                                        <span className="eks js-ui-close"></span>
                        </div>
                                </div>
                                <nav className="menu">
                                    <div className="menu-list">
                                        <ul>
                                            <li className="menu-item-has-children"><a href="#">Home</a>
                                                <ul className="sub-menu">
                                                    <li><a href="index.html">- Default</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">About Selah</a></li>
                                            <li className="menu-item-has-children"><a href="#">Portfolio</a>
                                            </li>
                                            <li className="menu-item-has-children"><a href="#">Beauty Tips</a></li>
                                            <li className="menu-item-has-children"><a href="#">FAQ</a>
                                                <ul className="sub-menu">
                                                    <li><a href="#">Can I go blind?</a></li>

                                                </ul>
                                            </li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>

                                <div className="hidden-xs">
                                    <div className="menu-social-media">
                                        <ul>
                                            <li><a href="#"><i className="iconmoon-facebook"></i></a></li>
                                            <li><a href="#"><i className="iconmoon-twitter"></i></a></li>
                                            <li><a href="#"><i className="iconmoon-dribbble3"></i></a></li>
                                            <li><a href="#"><i className="iconmoon-pinterest"></i></a></li>
                                            <li><a href="#"><i className="iconmoon-linkedin2"></i></a></li>
                                        </ul>
                                    </div>

                                    <div className="menu-information">
                                        <ul>
                                            <li><span>T:</span> 003 124 115</li>
                                            <li><span>E:</span> info@mail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                )
    }
}