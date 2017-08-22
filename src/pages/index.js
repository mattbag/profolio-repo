import React from "react"

import get from "lodash/get"
import Helmet from "react-helmet"

import "./grid.scss"
// import Bio from "../components/Bio"
import Tile from "../components/Tile"
// import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {

  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")
   
    return (
      <div className="grid__wrap">
        {/* <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <Bio /> */}
        <div className="grid">
        {posts.map(post => {
          if (post.node.path !== "/404/") {
            {/* const title = get(post, "node.frontmatter.title") || post.node.path */}
            {/* const cover = get(post, "node.frontmatter.cover") || post.node.path */}
{/* console.log(post.node) */}
            return (
             
                  <Tile post={post.node} key={post.node.frontmatter.path}/>

            )
          }
        })}
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
