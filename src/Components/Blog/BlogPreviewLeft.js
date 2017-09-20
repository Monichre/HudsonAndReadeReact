import React, { Component } from 'react'

export default class BlogPreviewLeft extends Component {
    render() {
        return (
            <article className="article-preview">

                    
                    <figure className="article-preview-right-image col-sm-6 col-xs-12">
                        <div className="article-preview-right-image-content">
                            <span className="article-preview-image-arrow"></span>
                            <img src={this.props.photo} data-rjs="2" alt="Interior technique Article Photo"/>
                        </div>
                    </figure>
                    

                    <div className="article-preview-content col-sm-6 col-xs-12">
                        <div className="article-preview-content-vertical-align">

                            <h1><a href="#" title="Photo of the Day: Queen Me!">{this.props.title}</a></h1>
                            <a href="#" className="article-category" title="photography">photography</a>
                            <ul className="article-info">
                                <li><span data-icon="&#xe023;"></span> {this.props.created}</li>
                            </ul>

                            <div className="article-text" dangerouslySetInnerHTML={{ __html: this.props.content}} />
                            
                            {this.props.readMore}

                        </div>
                    </div>
                    

                </article>
        )
    }
}