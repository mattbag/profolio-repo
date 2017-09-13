import React from 'react'
import Helmet from 'react-helmet'
// import Link from 'gatsby-link'
import get from 'lodash/get'
import { Container } from 'react-responsive-grid'

import Bio from '../components/bio/Bio'
import { rhythm } from '../utils/typography'

import Icon from './../components/icons/icon'
import './../utils/cover.scss'
import './../utils/_icons.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const cover = post.frontmatter.cover.childImageSharp
    let topPad
    let titleY
    let top

    if (post.frontmatter.app) {
      top = (
        <div className="iphone">
          <iframe src={post.frontmatter.app} frameBorder="0" width="100%" height="100%"></iframe>
        </div>
      )
      topPad = `${rhythm(2)} ${rhythm(3 / 4)}`
      titleY = '-20px'
    } else {
      topPad = `${rhythm(4)} ${rhythm(3 / 4)} 0`
      titleY = '-80px'
      top = (
        <div style={{ position: 'relative' }}>

          <img src={
            cover.responsiveSizes.originalImg
          }
            srcSet={
              cover.responsiveSizes.srcSet
            }
            alt={post.title}
            style={{
              transform: `scale(1.1)`,
              transformOrigin: `center bottom`,
              boxShadow: '0px 0px 10px 1px rgba(0,0,0,.3)'
            }}
          />

        </div>
      )
    }
    let tags
    if (post.frontmatter.tags) {
      let i = 0
      tags = (
        post.frontmatter.tags.map(tag => {
          i++
          return (
            <div key={tag} className="tags__pulse" style={{ animationDelay: `${2 * i}s` }}><Icon icon={tag.toString()} key={tag} /></div>)
        })
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(40),
          padding: topPad,
          backgroundColor: '#eee',
          boxShadow: '0px 0px 0px 5px rgba(255,255,255,.2)'
        }}
      >
        {top}


        <div style={{
          transform: `translateY(${titleY})`
        }}>
          <Helmet title={`${post.frontmatter.title} | ${post.frontmatter.tags} ${siteTitle}`} />
          <h1 style={{
            marginTop: 0,
            fontSize: '4rem',
            color: '#111',
            textShadow: `4px 4px #fff`
          }}>
            {post.frontmatter.title}
          </h1>
          <div className="tags">
            {tags}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} style={{ padding: `2vmin 0` }} />

          <hr
            style={{
              width: '80%',
              margin: '1.5rem auto',
              height: 2,
              backgroundColor: '#fff',
            }}
          />

          <Bio bio={false} social={true} />
        </div>
      </Container>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        app
        cover {
          childImageSharp {
            responsiveSizes(maxWidth: 1200, maxHeight: 800, quality: 100, cropFocus: CENTER) {
              src
              originalImg
              srcSet
            }
          }
        }
      }
    }
  }
`
