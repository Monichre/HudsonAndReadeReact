import React, { Component } from 'react'

export default class Home extends Component {
    render(){
        return (
            <div>
                  <div className="container">
        <div className="slider-wrapper">
            <div className="slider-description">
                <div className="slider-description-inner">
                    <h1>Selah<span>Lash</span></h1>
                </div>
                <div className="cd-intro">
                    <div className="cd-headline clip">
                        <span className="cd-words-wrapper">
                            <b className="is-visible">Beauty here</b>
                            <b className="">Beauty there</b>
                            <b className="">Beauty everywhere</b>
                        </span>
                    </div>
                </div>
            </div>
            <div id="slider-ef" className="slider-images-wrapper">
                <img className="img-responsive" height="100%" width="100%" src="img/stock-main.jpg" alt=""/>
                <img className="img-responsive" src="img/stock-1.jpg" alt=""/>
                <img className="img-responsive" src="img/stock-3.jpg" alt=""/>
            </div>
        </div>
    </div>
    <div className="container margin-top">
        <div className="history-wrapper">
            <div className="col-md-6 wow fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.5s">
                <div className="row">
                    <article>
                        <h1>About Saleh</h1>
                        <hr/>
                        <h4>Porro quisquam est, qui dolorem ipsum quia dolor sit amet,</h4>
                        <p>
                        <br/>Porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi modi tempora incidunt ut labore.</p>
                    </article>
                </div>
            </div>
            <div className="col-md-5 col-md-offset-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <div className="row">
                    <div id="history-images" className="owl-carousel">
                        <div><img className="img-responsive center-block" src="img/mandy-1.jpg" alt="About"/></div>
                        <div><img className="img-responsive center-block" src="img/mandy-fam.jpg" alt="About"/></div>
                        <div><img className="img-responsive center-block" src="img/mandy-2.jpg" alt="About"/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container margin-top">
        <div className="main-title">
            <h1>Our Philosophy</h1>
            <hr/>
            <h6>qui dolorem ipsum quia dolor sit amet</h6>
        </div>
        <div className="services-home-page">
            <div className="row">
                <div className="col-md-4">
                    <div className="services-icon">
                        <img src="img/icons/girl.svg" alt="" height="30px;"/>
                        
                    </div>
                    <h4>Beauty</h4>
                    <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because procure him.</p>
                </div>
                <div className="col-md-4">
                    <div className="services-icon">
                        <img src="img/icons/cosmetics.svg" alt="" height="30px;"/>
                        
                    </div>
                    <h4>Leisure</h4>
                    <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because procure him.</p>
                </div>
                <div className="col-md-4">
                    <div className="services-icon">
                        <img src="img/icons/shampoo.svg" alt="" height="30px;"/>
                        
                    </div>
                    <h4>Relaxation</h4>
                    <p>Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because procure him.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="container margin-top">
        <div className="main-title">
            <h1>OUR WORK</h1>
            <hr/>
            <h6>Worky work work</h6>
        </div>
        <div className="portfolio-wrapper">
            <button className="nav">
                <span className="icon-container">
                    <span className="line line01"></span>
                    <span className="line line02"></span>
                    <span className="line line03"></span>
                    <span className="line line04"></span>
                </span>
            </button>
            <div className="works-filter">
                <a href="javascript:void(0)" className="filter active" data-filter="mix">All</a>
                <a href="javascript:void(0)" className="filter" data-filter="branding">Lashes</a>
                <a href="javascript:void(0)" className="filter" data-filter="web">Facials</a>
                <a href="javascript:void(0)" className="filter" data-filter="graphic">Buttholes</a>
            </div>
            <div className="js-masonry">
                <div className="row" id="work-grid">
                    
                    <div className="col-md-4 col-sm-4 col-xs-12 mix branding">
                        <div className="img home-portfolio-image">
                            <img src="img/stock-1.jpg" alt="Portfolio Item"/>
                            <div className="overlay-thumb">
                                <a href="javascript:void(0)" className="like-product">
                                    <i className="ion-ios-heart-outline"></i>
                                    <span className="like-product">Liked</span>
                                    <span className="output">250</span>
                                </a>
                                <div className="details">
                                    <span className="title">Saleh Lash</span>
                                    <span className="info">NEW LOOK & Saleh Lash</span>
                                </div>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                                <a className="main-portfolio-link" href="single-project.html"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 mix web">
                        <div className="img home-portfolio-image">
                            <img src="img/stock-2.jpg" alt="Portfolio Item"/>
                            <div className="overlay-thumb">
                                <a href="javascript:void(0)" className="like-product">
                                    <i className="ion-ios-heart-outline"></i>
                                    <span className="like-product">Liked</span>
                                    <span className="output">60</span>
                                </a>
                                <div className="details">
                                    <span className="title">WATCH-J</span>
                                    <span className="info">NEW TREND FASHION</span>
                                </div>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                                <a className="main-portfolio-link" href="single-project.html"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 mix graphic">
                        <div className="img home-portfolio-image">
                            <img src="img/stock-3.jpg" alt="Portfolio Item"/>
                            <div className="overlay-thumb">
                                <a href="javascript:void(0)" className="like-product">
                                    <i className="ion-ios-heart-outline"></i>
                                    <span className="like-product">Liked</span>
                                    <span className="output">1060</span>
                                </a>
                                <div className="details">
                                    <span className="title">Saleh Lash</span>
                                    <span className="info">NEW LOOK & Saleh Lash</span>
                                </div>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                                <a className="main-portfolio-link" href="single-project.html"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 mix branding">
                        <div className="img home-portfolio-image">
                            <img src="img/stock-4.jpg" alt="Portfolio Item"/>
                            <div className="overlay-thumb">
                                <a href="javascript:void(0)" className="like-product">
                                    <i className="ion-ios-heart-outline"></i>
                                    <span className="like-product">Liked</span>
                                    <span className="output">900</span>
                                </a>
                                <div className="details">
                                    <span className="title">Saleh Lash</span>
                                    <span className="info">NEW LOOK & Saleh Lash</span>
                                </div>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                                <a className="main-portfolio-link" href="single-project.html"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 mix branding">
                        <div className="img home-portfolio-image">
                            <img src="img/stock-5.jpg" alt="Portfolio Item"/>
                            <div className="overlay-thumb">
                                <a href="javascript:void(0)" className="like-product">
                                    <i className="ion-ios-heart-outline"></i>
                                    <span className="like-product">Liked</span>
                                    <span className="output">979</span>
                                </a>
                                <div className="details">
                                    <span className="title">Saleh Lash</span>
                                    <span className="info">NEW LOOK & Saleh Lash</span>
                                </div>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                                <a className="main-portfolio-link" href="single-project.html"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 mix branding">
                        <div className="img home-portfolio-image">
                            <img src="img/stock-6.jpg" alt="Portfolio Item"/>
                            <div className="overlay-thumb">
                                <a href="javascript:void(0)" className="like-product">
                                    <i className="ion-ios-heart-outline"></i>
                                    <span className="like-product">Liked</span>
                                    <span className="output">1024</span>
                                </a>
                                <div className="details">
                                    <span className="title">Saleh Lash</span>
                                    <span className="info">NEW LOOK & Saleh Lash</span>
                                </div>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                                <a className="main-portfolio-link" href="single-project.html"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 mix branding">
                        <div className="img home-portfolio-image">
                            <img src="img/stock-7.jpg" alt="Portfolio Item"/>
                            <div className="overlay-thumb">
                                <a href="javascript:void(0)" className="like-product">
                                    <i className="ion-ios-heart-outline"></i>
                                    <span className="like-product">Liked</span>
                                    <span className="output">2048</span>
                                </a>
                                <div className="details">
                                    <span className="title">Saleh Lash</span>
                                    <span className="info">NEW LOOK & Saleh Lash</span>
                                </div>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                                <a className="main-portfolio-link" href="single-project.html"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 mix branding">
                        <div className="img home-portfolio-image">
                            <img src="img/stock-8.jpg" alt="Portfolio Item"/>
                            <div className="overlay-thumb">
                                <a href="javascript:void(0)" className="like-product">
                                    <i className="ion-ios-heart-outline"></i>
                                    <span className="like-product">Liked</span>
                                    <span className="output">256</span>
                                </a>
                                <div className="details">
                                    <span className="title">Saleh Lash</span>
                                    <span className="info">NEW LOOK & Saleh Lash</span>
                                </div>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                                <a className="main-portfolio-link" href="single-project.html"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12 mix branding">
                        <div className="img home-portfolio-image">
                            <img src="img/stock-9.jpg" alt="Portfolio Item"/>
                            <div className="overlay-thumb">
                                <a href="javascript:void(0)" className="like-product">
                                    <i className="ion-ios-heart-outline"></i>
                                    <span className="like-product">Liked</span>
                                    <span className="output">256</span>
                                </a>
                                <div className="details">
                                    <span className="title">Saleh Lash</span>
                                    <span className="info">NEW LOOK & Saleh Lash</span>
                                </div>
                                <span className="btnBefore"></span>
                                <span className="btnAfter"></span>
                                <a className="main-portfolio-link" href="single-project.html"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="load-more">
                <a href="javascript:void(0)" id="load-more"><i className="icon-refresh"></i></a>
            </div>
        </div>
    </div>
    <div className="container margin-top">
        <div className="newsletter">
            <div className="col-md-6">
                <div className="row">
                    <div className="newsletter-left">
                        <div className="newsletter-left-inner">
                            <h1>STAY INFORMED <br/> WITH OUR <b>NEWSLETTER</b></h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <div className="newsletter-right">
                        <div className="newsletter-right-inner">
                            <form>
                                <input type="text" name="newsletter" placeholder="ENTER YOUR EMAIL" />
                                <input type="submit" value="SUBSCRIBE" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div>
        )
    }
}