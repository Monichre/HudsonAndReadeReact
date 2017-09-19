import React, { Component } from 'react'

export default class BlogPreviewLeft extends Component {
    render() {
        return (
            <article className="article-preview">

                    
                    <figure className="article-preview-right-image col-sm-offset-1 col-sm-6 col-xs-12">
                        <div className="article-preview-right-image-content">
                            <span className="article-preview-image-arrow"></span>
                            <img src="images/blog/blog_photo_2.jpg" data-rjs="2" alt="Interior technique Article Photo">
                        </div>
                    </figure>
                    

                    
                    <div className="article-preview-content col-sm-5 col-xs-12">
                        <div className="article-preview-content-vertical-align">

                            <h1><a href="#" title="Photo of the Day: Queen Me!">Photo of the Day: Queen Me!</a></h1>
                            <a href="#" className="article-category" title="photography">photography</a>
                            <ul className="article-info">
                                <li><span data-icon="&#xe023;"></span> 15/01/2016</li>
                                <li><span data-icon="&#x76;"></span> 15</li>
                                <li><span data-icon="&#xe106;"></span> 634</li>
                            </ul>

                            <div className="article-text">
                                <p>This beauty photograph whispers softly to my eyes. The low saturation, the wonderfully soft light and the falling snow build the story of an ice princess awaiting her prince. The makeup, her frosted hair, white feathers
                                    and fur show a depth of style...</p>
                            </div>

                            <a href="blog-post.html" className="btn-noborder" title="Read more">Read more</a>

                        </div>
                    </div>
                    

                </article>
        )
    }
}