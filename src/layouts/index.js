import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import Bio from "../components/bio/Bio"
import 'typeface-lobster'
import { rhythm, scale } from '../utils/typography'
import "./master.scss"

class Template extends Component {
  render() {
    const { location, children } = this.props
    let header
    let _bio

    if (location.pathname === '/') {
      _bio = (
        <Bio text="I'm Matt, a Progressive Front-end Dev" />
      )
    } else {
      _bio = (
        <Bio />
      )
    }

    header = (
      <header>
        <h1
          style={{
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

            {_bio}

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
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template
