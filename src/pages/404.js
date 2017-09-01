import React from "react"

import get from "lodash/get"
import Helmet from "react-helmet"

class BlogIndex extends React.Component {
  constructor() {
    super()
  }




 
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")

    return (
      <div>
      

          <Helmet title={get(this, "props.data.site.siteMetadata.title")} />

        

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
