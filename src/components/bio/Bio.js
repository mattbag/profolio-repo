import React,{Component} from 'react'

// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'
import Social from './../social/social'
import profilePic from './face.png'
// import { rhythm } from '../utils/typography'
import './bio.scss'

class Bio extends Component {
  render() {
    let bio
    let social
    let text

    if (this.props.bio) {
      bio = (
        <span>
          Just a cool thing by Matt Bagni 
      <a href="https://twitter.com/mattbag00">
            If you fancy Twitter
      </a>
        </span>
      )
    }
    if (this.props.text) {
      text = (
        <span style={{
          fontSize: '5vw',
          color: '#fff',
          textShadow:`4px 4px #1a1a1a`
        }}>{this.props.text}</span>
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
          style={{marginBottom: -5}}
        />
        
        {bio}
        {social}
        {text}
      </div>
    )
  }
}

export default Bio
