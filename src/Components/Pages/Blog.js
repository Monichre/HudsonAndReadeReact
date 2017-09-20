import React, { Component } from 'react'
import BlogPreviewLeft from '../Blog/BlogPreviewLeft'
import BlogPreviewRight from '../Blog/BlogPreviewRight'
import _ from 'lodash'
import { Link } from 'react-router-dom'

import AppStore from '../../Stores/AppStore'


export default class Blog extends Component {
    render(){
        const data = AppStore.data
        const articles = data.articles

        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


        let articles_html = articles.map((article) => {
            let date_obj = new Date(article.created)
			let created = months[(date_obj.getMonth() + 1)] + ' ' + date_obj.getDate() + ', ' + date_obj.getFullYear()
			let readMore = <Link to={'/' + article.slug} onClick={this.scrollTop}>Read More</Link>

            if (articles.indexOf(article) % 2 === 0) {
                return (
                    <BlogPreviewRight
                        date={created}
                        read_more={readMore}
                        title={article.title}
                        content={article.content}
                        photo={article.metafield.photo ? article.metafield.photo.url : null}
                        affiliate_link={article.metafield.affiliate_link ? article.metafield.affiliate_link.url : null}
                        />
                )
            } else {
                return (
                    <BlogPreviewLeft
                        date={created}
                        read_more={readMore}
                        title={article.title}
                        content={article.content}
                        photo={article.metafield.photo ? article.metafield.photo.url : null}
                        affiliate_link={article.metafield.affiliate_link ? article.metafield.affiliate_link.url : null}
                        />
                )
            }

        })

        return (
            <section className="blog">
                <div className="container">
                    <div className="row">
                        {articles_html}

                        <div className="more col-xs-12">
                            <a className="animsition-link btn-normal" href="blog.html" title="Go Blog">Bloggin So Hard</a>
                        </div>
                    </div>
                </div>
        </section>
        )
    }
}