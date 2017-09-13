import React from 'react'
import profilePic from './../components/bio/face.png'
import {Helmet} from 'react-helmet'

const NotFoundPage = () => (
  
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: `100%`,
    flexDirection: 'column'
  }}>
  <Helmet title='404 - Matt Bagni' />
    <img src={profilePic}
      alt={`Matt Bagni logo`}
      width="30%"
      style={{ marginBottom: -5 }}
    />
    <h1 style={{color: 'white',textShadow: `2px 2px #111`}}>Ohh...! What now...?</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

  </div>

)

export default NotFoundPage