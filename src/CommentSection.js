import React, { Component } from 'react'

class Comment extends React.Component {
    render() {
        return <li>{this.props.comment}</li>
    }
}

class CommentSection extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
        }
    }

    addComment(event) {
        event.preventDefault()
        const comments = [...this.state.comments]
        comments.push('Kyle')
        this.setState({ comments })
    }

    render() {
        return (
            <div>
                <form>
                    <br />
                    <input type="text" />
                    <button onClick={(event) => this.addComment(event)} action >Submit Comment</button>
                </form>
                <ul>
                    {this.state.comments.map(comments => <Comment comment={comments} />)}
                </ul>
            </div>
        )
    }
}


export default CommentSection