import React, { Component } from 'react';
import Avatar from './Avatar';
import ArticleBody from './ArticleBody';
import ArticleInteract from './ArticleInteract'

class Article extends Component {
    render() {
        return (
            <div className="large-8 medium-12 columns article">
                <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>

                <Avatar />
                
                <ArticleBody />
                
                <ArticleInteract />
                
            </div>
        )
    }
}

export default Article