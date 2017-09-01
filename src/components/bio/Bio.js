import React from 'react'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'
import Social from './../social/social'
import profilePic from './face.png'
// import { rhythm } from '../utils/typography'
import './bio.scss'

class Bio extends React.Component {
  render() {
    let bio
    let social
    if (this.props.bio) {
      bio = (
        <span>
          Written by < strong > Kyle Mathews</strong > who lives and works in San
      Francisco building useful things.
      <a href="https://twitter.com/kylemathews">
            You should follow him on Twitter
      </a>
        </span>
      )
    }
    
    if (this.props.social) {
      social = <Social />
    }
    return (
      <div className="bio">
        <img
          src={profilePic}
          alt={`Matt Bagni logo`}
          width="50px"
        />
        
        {bio}
        {social}
      </div>
    )
  }
}

export default Bio
