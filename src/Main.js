import React, { Component } from 'react'
import Article from './Article';
import Adspace from './Adspace';
import Clickbait from './Clickbait';

class Main extends Component {
    render() {
        return (
            <main className="expanded row">

                <Article />

                <Adspace />

                <Clickbait />

            </main>
        )
    }
}

export default Main