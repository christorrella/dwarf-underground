import React, { Component } from 'react'

class AdCreator extends React.Component {
  render() {
    return (
      <div className="small-6 medium-3 columns other-article">
        <a href="#">
          <img src="https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif" alt="orc" />
          <p>{this.props.name}</p>
        </a>
      </div>
    )
  }
}

class Clickbait extends React.Component {
  constructor() {
    super()

    this.state = {
      acrobats: [
        'Kendall',
        'Stewart',
        'Owen',
        'Chris',
      ],
    }
  }

  render() {
    return (
      <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        {this.state.acrobats.map(acrobat => <AdCreator name={acrobat} />)}
      </div>
    )
  }
}


export default Clickbait