import React from 'react'
import Link from "gatsby-link"
// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'
import "./tile.scss"
// import profilePic from './profile-pic.jpg'
// import { rhythm } from '../utils/typography'

class Tile extends React.Component {
  constructor(){
    super()
    this.state ={
      lift: false,
      // lvl1: {points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}]}
      lv1: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv2: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv3: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    }
  }
  // componentWillMount(){
  //   // console.log('mount');
  //   this.setState ({
  //     lvl1: 'transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
  //     lvl2: 'transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
  //     lvl3: 'transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
  //   })
  //   console.log(this.state)
  // }
  _mouseEnter(){
    this.setState ({
      lv1: 'matrix3d(0.999848, -0.0174524, 0, 0, 0.0174524, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 50, 1)',
      lv2: 'matrix3d(0.999391, 0.0348995, 0, 0, -0.0348995, 0.999391, 0, 0, 0, 0, 1, 0, 0, 0, 100, 1)',
      lv3: 'matrix3d(0.999848, 0.0174524, 0, 0, -0.0174524, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 150, 1)'
        })
   }
   _mouseLeave(){
    this.setState ({
      lv1: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv2: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv3: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
        })
   }

  render() {
    // console.log(this.state.lv1);
    const _p = this.props.post.frontmatter

    return (
     
      <div className="tile" 
        onMouseEnter={this._mouseEnter.bind(this)}
        onMouseLeave={this._mouseLeave.bind(this)}
          >
         <Link to={_p.path} style={{
              boxShadow: 'none'}}>
          <img className="tile__1" src={
           _p.cover.childImageSharp
              .resize.src
          } alt={_p.title}
          style={{transform: this.state.lv1}}/>
          <img className="tile__2" src={
           _p.cover.childImageSharp
              .resize.src
          } alt={_p.title}
          style={{transform: this.state.lv3}}/>
          <img className="tile__3" src={
           _p.cover.childImageSharp
              .resize.src
          } alt={_p.title}
          style={{transform: this.state.lv3}}/>
          <span className="tile__title">{_p.title}</span>
          </Link>
      </div>
          // <div className={`grid__item tile ${this.state.lift ? 'lift' : ''}`} 
        
          // >
					// 	<a className="grid__link" href="https://dribbble.com/JulienLavallee">
					// 		<img className="grid__img layer" src={_p.cover.childImageSharp.resize.src} alt="Canvas Dummy" style={{transform: this.state.lv1}}/>
					// 		<img className="grid__img layer" src={_p.cover.childImageSharp.resize.src} alt="Wireframe Dummy"/>
					// 		<img className="grid__img layer" src={_p.cover.childImageSharp.resize.src} alt="021"/>
					// 		<span className="grid__title">Julien Lavallee</span>
					// 	</a>
					// </div>

    )
  }
}

export default Tile
