import React, { Component } from 'react' 

export default class Footer extends Component {
    render() {
        return (
            <div className="row">
                
                <section className="newsletter">
                    <div className="container">
                        <div className="section-wrapper col-xs-12">

                            <div className="section-title">
                                <h1>Connect</h1>
                            </div>

                            <form id="newsletter-form" action="#" method="get">
                                <div className="row">
                                    <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 col-xs-offset-1 col-xs-10">
                                        <input id="email" className="form-field" name="email" type="email" placeholder="Your Email" />
                                    </div>
                                        <div className="more col-xs-12">
                                            <a className="animsition-link btn-normal btn-grey" href="#" title="Subscribe me">Stick With Me</a>
                                        </div>
                                    </div>
                            </form>

                        </div>
                    </div>
                </section>
    

                

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="logo"><a href="index4.html" title="AJ">H+R</a></div>
                                <div className="socials">
                                    <ul>
                                        <li><a href="#" title="Facebook"><span data-icon="&#xe093;"></span></a></li>
                                        <li><a href="#" title="Twitter"><span data-icon="&#xe094;"></span></a></li>
                                        <li><a href="#" title="Instagram"><span data-icon="&#xe09a;"></span></a></li>
                                        <li><a href="#" title="Flickr"><span data-icon="&#xe0a6;"></span></a></li>
                                        <li><a href="#" title="LinkedIn"><span data-icon="&#xe09d;"></span></a></li>
                                        <li><a href="#" title="Pinterest"><span data-icon="&#xe095;"></span></a></li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    <p>LoveCraft.io</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}