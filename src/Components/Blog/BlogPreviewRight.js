import React, { Component } from 'react'

export default class BlogPreviewRight extends Component {
    render() {
        return (
            <article className="article-preview">
            
                                
                                <figure className="article-preview-left-image col-sm-6 col-xs-12">
                                    <div className="article-preview-left-image-content">
                                        <span className="article-preview-image-arrow"></span>
                                        <img src="images/blog/blog_photo_1.jpg" data-rjs="2" alt="Interior technique Article Photo">
                                    </div>
                                </figure>
                                
                                
                                <div className="article-preview-content col-sm-5 col-sm-offset-1 col-xs-12">
                                    <div className="article-preview-content-vertical-align">
            
                                        <h1><a href="#" title="The 80 best Tumblr blogs for designers">The 80 best Tumblr blogs for
                                        designers</a></h1>
                                        <a href="#" className="article-category" title="tutorials">tutorials</a>
                                        <ul className="article-info">
                                            <li><span data-icon="&#xe023;"></span> 15/01/2016</li>
                                            <li><span data-icon="&#x76;"></span> 15</li>
                                            <li><span data-icon="&#xe106;"></span> 634</li>
                                        </ul>
            
                                        <div className="article-text">
                                            <p>Whether you're a creative director on the hunt for new talent, or a dev looking for some web design inspiration, Tumblr is full of inspirational work. The micro blogging service and social network makes it mega-easy for
                                                anyone wanting...</p>
                                        </div>
            
                                        <a href="blog-post.html" className="btn-noborder" title="Read more">Read more</a>
            
                                    </div>
                                </div>
                                
                            </article>
        )
    }
}