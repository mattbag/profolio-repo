import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Container } from 'react-responsive-grid'

import Bio from '../components/bio/Bio'
import { rhythm } from '../utils/typography'
import wf from './../img/wf.png'
import cs from './../img/cs.png'
import angular from './../img/angular.png'
import ionic from './../img/ionic.png'
import app from './../img/app.png'
import wordpress from './../img/wordpress.png'

import './../utils/cover.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const cover = post.frontmatter.cover.childImageSharp
    let top

    if (post.frontmatter.app) {
      top = (
        <div className="iphone">
        <iframe src={post.frontmatter.app} frameBorder="0" width="100%" height="100%"></iframe>
        </div>
      )
    } else {
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

          {/* <img src={wf} alt={post.title}
                style={{
                  position: 'absolute',
                  left: '-10%',
                  bottom: 0,
                  zIndex: 0,
                  width: '80%',
                  transform: `rotate(-5deg)`,
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,.3)',
                }}
                   />
                   <img src={wf} alt={post.title}
                style={{
                  position: 'absolute',
                  right: '-10%',
                  bottom: -20,
                  zIndex: 0,
                  width: '80%',
                  transform: `rotate(5deg)`,
                  boxShadow: '0px 0px 10px 1px rgba(0,0,0,.3)',
                  opacity: .9
                }}
                   /> */}
        </div>
      )
    }
let tags
if(post.frontmatter.tags){
 tags = (
    post.frontmatter.tags.map(tag=>{
      let src
      switch (tag.toString()) {
        case 'ionic':
          src = ionic;
          break;
        case 'angular':
          src = angular;
          break;
        case 'app':
          src = app;
          break;
        case 'wordpress':
          src = wordpress;
          break;
      }
      return <img src={src} alt={tag} key={tag} width="30"/>
  })
)
}
    return (
      <Container
        style={{
          maxWidth: rhythm(40),
          padding: `${rhythm(4)} ${rhythm(3 / 4)} 0`,
          backgroundColor: '#eee',
          boxShadow: '0px 0px 50px 5px rgba(255,255,255,.2)'
        }}
      >
        {top}
        <div style={{
            transform: `translateY(-100px)`
           }}>
          <Helmet title={`${post.frontmatter.title} | ${post.frontmatter.tags} ${siteTitle}`} />
          <h1 style={{ marginTop: 0,
            fontSize: '4rem',
            color: '#111',
            textShadow:`4px 4px #fff`
           }}>
            {post.frontmatter.title}
          </h1>
          <div
            style={{
              display: 'flex',
              alignItems:'center',
              marginTop: rhythm(-.75),
            }}
          >
            
            {tags}
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              width: '70%',
              margin: '1.5rem auto'
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
