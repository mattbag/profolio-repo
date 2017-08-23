import React from "react"

import get from "lodash/get"
import Helmet from "react-helmet"

import "./grid.scss"

import Tile from "../components/tile/Tile"
// import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      transformY: '-40',
      gridHeight: ''
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    this.loadInterval = setTimeout(() => { this.getHeight() });
  }

  getHeight() {
    const _h = document.getElementsByClassName('grid')[0].offsetHeight;
    this.setState({ gridHeight: _h })
    // console.log(this.state.gridHeight)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    clearTimeout(this.loadInterval);
  }

  handleScroll(event) {
    // let scrollTop = event.srcElement.body.scrollTop,
    // let itemTranslate = Math.min(0, window.pageYOffset / 3 - 60);
    let itemTranslate = window.pageYOffset / 5;
    this.setState({
      transformY: -itemTranslate - 40
    });
    // console.log(window.pageYOffset)
  }
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")

    return (
      <div>
        <div className="grid__scroll" style={{ height: this.state.gridHeight }}></div>

        <div className="grid__wrap">
          <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
         
          <div className="grid" style={{ transform: `translateY(${this.state.transformY}%)` }}>
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
          </div>
        </div>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
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
                resize(width: 378, height: 284) {
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
