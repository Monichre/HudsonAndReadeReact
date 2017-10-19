import React, { Component } from 'react'
import AppDispatcher from '../../Dispatcher/AppDispatcher'
import AppStore from '../../Stores/AppStore'
import OwlCarousel from 'react-owl-carousel2'
import Blog from './Blog'
import {Link} from 'react-router-dom'
import _ from 'lodash'

// let category = article.fields.category[0].fields.title.split(' ')[0].toLowerCase()
{/* <a href="#" className="article-category" title="tutorials">{article.fields.category.fields.title}</a> */}
// let readMore = <Link to={'/' + category + '/' + article.fields.title} onClick={this.scrollTop}>Read More</Link>
{/* <div className="img-thumbnail">
                                                
                                            </div>
                                            <br />
                                            <div className="img-thumbnail">
                                                
                                            </div>
                                            <br />
                                            <div className="img-thumbnail">
                                                
                                            </div> */}

export default class Home extends Component {
    getPageData() {
        AppDispatcher.dispatch({ action: 'get-page-data', page_slug: 'Home' })
    }
    componentWillMount() {
        this.getPageData()
    }
    render() {
        const data = this.props.data
        console.log(data)
		let item_num = data.item_num
		let articles = data.articles.slice(3, data.articles.length -1)
        const featured_posts = data.featured

        const options = {
            items: 3,
            nav: true,
            navText: ["<i class='fa fa-lg fa-chevron-left'></i>", "<i class='fa fa-lg fa-chevron-right'></i>"],
            dots: false,
            margin: 10,
            lazyLoad: true,
            autoplay: true
        }

        const events = {
            onDragged: function (event) { },
            onChanged: function (event) { }
        }
        let load_more
		let show_more_text = 'More Posts'

		if (data.loading) {
			show_more_text = 'Loading...'
		}

		if (articles && item_num <= articles.length) {
			load_more = (
				<div>
					<button className="btn btn-default center-block" onClick={this.props.getMoreArticles.bind(this)}>
						{show_more_text}
					</button>
				</div>
			)
		}

		articles = _.take(articles, item_num)
		const months = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"]
		const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

		const hasPhoto = article => article.fields.photos


        return (
            <div id="Home">
                   <section className="most-recent-posts">
                        <div className="container">
                            <div className="row">
                            <OwlCarousel id="featured_posts" ref="owl" options={options} events={events}>
                                {featured_posts.map(article => {
                                    let date_obj = new Date(article.sys.createdAt)
                                    let created = months[(date_obj.getMonth() + 1)] + ' ' + date_obj.getDate() + ', ' + date_obj.getFullYear()
                                    const image_bg = {
                                        background: `url(${article.fields.featuredPhoto.fields.file.url})`
                                    }
                                    
                                    const subTitle = Object.keys(article.fields).includes('subHeader') ? article.fields.subHeader : null
                                    return (
                                        <div className="img-bg" style={image_bg}>
                                            <div className="inner">
                                                <div className="content">
                                                    <h1>{article.fields.title}</h1>
                                                    
                                                    <ul className="article-info">
                                                        <li><span data-icon="&#xe023;"></span>{created}</li>
                                                        <li><span data-icon="&#x76;"></span> 15</li>
                                                        <li><span data-icon="&#xe106;"></span> 634</li>
                                                        <li><a className="read-more" href="blog-post.html" className="btn-noborder" title="Read more">Read More</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        

                                        </div>
                                    )}
                                )}
                            </OwlCarousel>

                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}