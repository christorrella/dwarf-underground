import React, { Component } from 'react'

class ShareLink extends Component {
    render() {
        return (
            <a className="article-link" href="#">
                <i className="fa fa-share"></i>
                <span className="article-link-text">Share Post</span>
            </a>
        )
    }
}

export default ShareLink