import React, { Component } from 'react'
import CommentsLink from './CommentsLink'
import ShareLink from './ShareLink'

class ArticleInteract extends Component {
    render() {
        return (
            <div className="article-links">
                <CommentsLink/>
                
                <ShareLink />
            </div>
        )
    }
}

export default ArticleInteract