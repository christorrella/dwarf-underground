import React, { Component } from 'react'

class CommentsLink extends Component {
    render() {
        return (
            <a className="article-link" href="
            javascript:
            document.getElementById('CommentArea').hidden = !document.getElementById('CommentArea').hidden;

            ">
                <i className="fa fa-comments-o"></i>
                <span className="article-link-text">Comments</span>
            </a>
        )
    }
}

export default CommentsLink