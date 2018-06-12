import React, { Component } from 'react'

class AdCreator extends React.Component {

  render() {
    return (
      <div className={this.props.item.className}>
          <a href={this.props.item.type}>
            <img src={this.props.item.img} alt={this.props.item.altText} />
            <p>{this.props.item.title}</p>
          </a>
        </div>
    )
  }
}

class Clickbait extends React.Component {
  constructor() {
    super()

    this.state = {
      Arr: [
        {
          className: "small-6 medium-3 columns other-article",
          img: 'https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif',
          link: '#',
          altText: 'orc',
          title: 'Single Orcs in Indianapolis',
        },
        {
          className: "small-6 medium-3 columns other-article",
          img: 'https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg',
          link: '#',
          altText: 'mountain',
          title: "You won't believe what's under this mountain",
        },
        {
          className: "small-6 medium-3 columns other-article",
          img: 'http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg',
          link: '#',
          altText: 'gold',
          title: 'Mine 20% more gold with One Weird Trick',
        },
        {
          className: "small-6 medium-3 columns other-article",
          img: 'http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg',
          link: '#',
          altText: 'hobbit',
          title: 'Surprise for Indiana Hobbits born before 1999',
        },
      ],
    }
  }

  render() {
    return (
      <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>

        {this.state.Arr.map(
          items => <AdCreator item={items} />
        )}

      </div>
    )
  }
}


export default Clickbait