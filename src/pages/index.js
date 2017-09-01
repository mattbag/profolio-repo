import React from "react"

import get from "lodash/get"
import Helmet from "react-helmet"

import "./grid.scss"

import Tile from "../components/tile/Tile"
// import { rhythm } from "../utils/typography"
const startY = 20;

class BlogIndex extends React.Component {
  constructor() {
    super()
    if (window.innerWidth > 768) {
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
      this.loadInterval = setTimeout(() => { this.getHeight() });

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

  handleScroll(event) {
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
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")

    return (
      <div>
        {/* <div className="grid__scroll" style={{ height: this.state.gridHeight }}></div> */}
        {this.createScroller(!this.state.isMob)}
        <div className={`grid__wrap ${!this.state.isMob ? 'grid__dk' : ''}`}>
          <Helmet title={get(this, "props.data.site.siteMetadata.title")} />

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
            {/* <Tile post={post.node} key={post.node.frontmatter.path} /> */}
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
                resize(width: 378, height: 284, quality: 80) {
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
