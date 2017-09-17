import React, { Component } from "react"
import PropTypes from 'prop-types';
import get from "lodash/get"
import Helmet from "react-helmet"
import logo from './../components/bio/face.png'
import "./grid.scss"

import Tile from "../components/tile/Tile"
import TileEmpty from "../components/tile/TileEmpty"
import Builtwith from './../components/builtwith/Builtwith'
// import { rhythm } from "../utils/typography"
const startY = 20;

class BlogIndex extends Component {
  constructor() {
    super()

    this.state = {
      transformY: `-${startY}%`,
      gridHeight: '',
      isMob: false
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.getHeight = this.getHeight.bind(this);
  }

  getHeight() {
    const _h = document.getElementsByClassName('grid')[0].offsetHeight;
    this.setState({ gridHeight: _h })
    // console.log(this.state.gridHeight)
    // return document.getElementsByClassName('grid')[0].offsetHeight;
  }

  componentDidMount() {
    let _isMobOnMount = window.innerWidth >= 1200

    if (_isMobOnMount) {
      // this.setState({ isMob: _isMobOnMount })
      document.addEventListener('scroll', this.handleScroll);
      this.loadInterval = setTimeout(() => { this.getHeight() }, 200);

      window.addEventListener('resize', () => {
        this.getHeight()
      });
    } else {

    }
    this.setState({ isMob: !_isMobOnMount })
    console.log(this.state.isMob)
  }

  componentWillUnmount() {
    if (!this.state.isMob) {
      document.removeEventListener('scroll', this.handleScroll);
      clearTimeout(this.loadInterval);
    }
  }

  handleScroll() {

    let itemTranslate = window.pageYOffset / 30;

    document.querySelector('.grid').style.transform = `translateY(${-itemTranslate}%)`
    // console.log(document.querySelector('.grid'))
  }
  createScroller(bool) {
    if (bool) {
      // try to return the height here
      // console.log(this.getHeight())
      return (<div className="grid__scroll" style={{ height: this.state.gridHeight }}></div>)
    }
  }
  renderDummy(len) {
    console.log(this.state.isMob)
    if (this.state.isMob) { return }
    let dums = []
    for (var index = 0; index < len; index++) {
      dums.push(<TileEmpty key={index} />)
    }
    return dums
  }
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")
    let dummy = posts.length < 10 ? 6 : 6
    console.log('index render alert')

    return (
      <div>
        {/* <div className="grid__scroll" style={{ height: this.state.gridHeight }}></div> */}
        {this.createScroller(!this.state.isMob)}
        <div className={`grid__wrap ${!this.state.isMob ? '' : ''}`}>
          <Helmet title={`${siteTitle} - a Progressive Front-end Dev`}>
            <link rel="icon"
              type="image/png"
              href={logo} />
          </Helmet>
          <div className="grid">
            {posts.map(post => {
              if (post.node.path !== "/404/") {
                {/* const title = get(post, "node.frontmatter.title") || post.node.path */ }
                {/* const cover = get(post, "node.frontmatter.cover") || post.node.path */ }
                {/* console.log(post.node) */ }
                return (

                  <Tile post={post.node} key={post.node.frontmatter.path} />

                )
              }
            })}
            {this.renderDummy(dummy)}
          </div>
        </div>
        <Builtwith />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            cover {
              childImageSharp {
                resize(width: 378, height: 284, quality: 80, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
