import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import Bio from "../components/bio/Bio"
import 'typeface-montserrat'
import { rhythm, scale } from '../utils/typography'
import "./master.scss"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

      header = (
        <header>
          <h1
            style={{
              ...scale(.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
              position: 'fixed',
              left: '.25rem',
              top: '.5rem',
              zIndex: 1
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              <Bio />
            </Link>
          </h1>
        </header>
      )
   
   
    return (
      <Container
        style={{
          maxWidth: rhythm(80),
          padding: `${rhythm(3 / 4)}`,
        
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
