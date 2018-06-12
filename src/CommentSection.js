import React, { Component } from 'react'

class Comment extends React.Component {
    render() {
        return <li>Anonymous Hobbit: "{this.props.comment}"</li>
    }
}

class CommentSection extends Component {
    constructor() {
        super()
        this.state = {
            comments: [],
        }
    }

    addComment(event, theComment) {
        event.preventDefault()
        const comments = [...this.state.comments]
        comments.push(theComment)
        this.setState({ comments })
    }

    render() {
        return (
            <div>
                <form>
                    <br />
                    <input type="text" id="theComment"/>
                    <button onClick={(event) => this.addComment(event, document.getElementById('theComment').value)} action >Submit Comment</button>
                </form>
                <ul>
                    {this.state.comments.map(comments => <Comment comment={comments} />)}
                </ul>
            </div>
        )
    }
}


export default CommentSection