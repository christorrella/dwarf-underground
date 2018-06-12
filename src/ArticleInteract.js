import React, { Component } from 'react'
import CommentsLink from './CommentsLink'
import ShareLink from './ShareLink'
import CommentSection from './CommentSection'

class ArticleInteract extends Component {
    render() {
        return (
            <div className="article-links">
                <CommentsLink />

                <ShareLink />
                
                <CommentSection />
                
            </div>

        )
    }
}

export default ArticleInteract