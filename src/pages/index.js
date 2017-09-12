import React, { Component } from "react"
import PropTypes from 'prop-types';
import get from "lodash/get"
import Helmet from "react-helmet"
import logo from './../components/bio/face.png'
import "./grid.scss"

import Tile from "../components/tile/Tile"
import TileEmpty from "../components/tile-empty/TileEmpty"
// import { rhythm } from "../utils/typography"
const startY = 20;

class BlogIndex extends Component {
  constructor() {
    super()
    if (window.innerWidth >= 1200) {
      this.state = {
        transformY: `-${startY}%`,
        gridHeight: '',
        isMob: false
      }
    } else {
      this.state = {
        transformY: '4rem',
        gridHeight: '',
        isMob: true
      }
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.getHeight = this.getHeight.bind(this);
  }

  getHeight() {
    const _h = document.getElementsByClassName('grid')[0].offsetHeight;
    this.setState({ gridHeight: _h })
    // console.log(this.state.gridHeight)
  }

  componentDidMount() {
    if (!this.state.isMob) {

      document.addEventListener('scroll', this.handleScroll);
      this.loadInterval = setTimeout(() => { this.getHeight() },200);

      window.addEventListener('resize', () => {
        this.getHeight()
      });
    }
  }

  componentWillUnmount() {
    if (!this.state.isMob) {
      document.removeEventListener('scroll', this.handleScroll);
      clearTimeout(this.loadInterval);
    }
  }

  handleScroll() {
    // let scrollTop = event.srcElement.body.scrollTop,
    // let itemTranslate = Math.min(0, window.pageYOffset / 3 - 60);
    let itemTranslate = window.pageYOffset / 8;
    this.setState({
      transformY: -itemTranslate - startY + '%'
    });
    // console.log(this.state.transformY)
  }
  createScroller(bool) {
    if (bool) {
      return (<div className="grid__scroll" style={{ height: this.state.gridHeight }}></div>)
    }
  }
  renderDummy(len){
    let dums = []
    for (var index = 0; index < len; index++) {
      dums.push(<TileEmpty key={index}/>)
    }
    return dums
  }
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")
    let dummy = posts.length < 10 ? 6 : 2
// console.log(dummy)

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
          <div className="grid" style={{ transform: `translateY(${this.state.transformY})` }}>
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
