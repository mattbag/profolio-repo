import React from 'react'
import Link from "gatsby-link"
// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'
import "./tile.scss"
import wf from './wf.png'
import cs from './cs.png'
// import { rhythm } from '../utils/typography'

class Tile extends React.Component {
  constructor(){
    super()
    this.state ={
      lift:'',
      // lvl1: {points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}]}
      lv1: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv2: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv3: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
      // lv1:'',
      // lv2:'',
      // lv3:'',
      // lv1: 'matrix3d(0.999848, -0.0174524, 0, 0, 0.0174524, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 150, 1)',
      // lv2: 'matrix3d(0.999391, -0.0348995, 0, 0, 0.0348995, 0.999391, 0, 0, 0, 0, 1, 0, 0, 0, 100, 1)',
      // lv3: 'matrix3d(0.999848, -0.0174524, 0, 0, 0.0174524, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 50, 1)'

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
      lift:'lift',
      lv1: 'matrix3d(0.999848, -0.0174524, 0, 0, 0.0174524, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 150, 1)',
      lv2: 'matrix3d(0.999391, 0.0348995, 0, 0, 0.0348995, 0.999391, 0, 0, 0, 0, 1, 0, 0, 0, 100, 1)',
      lv3: 'matrix3d(0.999848, 0.0174524, 0, 0, 0.0174524, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 30, 1)'
        })
   }
   _mouseLeave(){
    this.setState ({
      lift:'',
      lv2: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv1: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv3: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
      // lv1:'',
      // lv2:'',
      // lv3:'',
        })
   }

  render() {
    // console.log(this.state.lv1);
    const _p = this.props.post.frontmatter

    return (
     
      <div className={`tile ${this.state.lift}`} 
        onMouseOver={this._mouseEnter.bind(this)}
        onMouseOut={this._mouseLeave.bind(this)}
          >
         <Link to={_p.path} style={{
              boxShadow: 'none', display: 'inline-block'}}>
          <img src={
           _p.cover.childImageSharp
              .resize.src
          } alt={_p.title}
          style={{transform: this.state.lv1}}/>
          <img src={wf} alt={_p.title}
          style={{transform: this.state.lv2}}/>
          <img src={wf} alt={_p.title}
          style={{transform: this.state.lv3}}/>
          <span className="tile__title">{_p.title}</span>
          </Link>
      </div>

    )
  }
}

export default Tile
