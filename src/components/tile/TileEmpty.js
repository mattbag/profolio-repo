import React from 'react'
// import Link from "gatsby-link"
// Import typefaces
// import 'typeface-montserrat'
// import 'typeface-merriweather'
import "./tile.scss"
import wf from './../../img/wf.png'
import wfo from './../../img/wfo.png'
import oo from './../../img/oo.png'
// import { rhythm } from '../utils/typography'

class TileEmpty extends React.Component {
  constructor() {
    super()
    this.state = {
      lift: '',
      // lvl1: {points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}]}
      lv1: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv2: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv3: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    }
  }
  _rand(min, max) {
    return Math.floor(Math.random() * max) + min
  }
  _mouseEnter() {
    this.setState({
      lift: 'lift',
      lv1: `matrix3d(0.999848, ${this._rand(-10, 10) / 100}, 0, 0, 0.0${this._rand(10, 20)}, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 150, 1)`,
      lv2: `matrix3d(0.999391, 0.0${this._rand(25, 40)}, 0, 0, 0.0${this._rand(25, 40)}, 0.999391, 0, 0, 0, 0, 1, 0, 0, 0, 100, 1)`,
      lv3: `matrix3d(0.999848, 0.0${this._rand(17, 40)}, 0, 0, 0.0${this._rand(17, 40)}, 0.999848, 0, 0, 0, 0, 1, 0, 0, 0, 30, 1)`
    })
  }
  _mouseLeave() {
    this.setState({
      lv2: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv1: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
      lv3: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)'
    })
  }

  render() {
    return (

      <div className="tile"
        onMouseOver={this._mouseEnter.bind(this)}
        onMouseOut={this._mouseLeave.bind(this)}
      >
          <img src={wf} alt={`Coming Soon`}
            style={{ transform: this.state.lv1 }} />
          <img src={wfo} alt={`Coming Soon`}
            style={{ transform: this.state.lv2 }} />
          <img src={oo} alt={`Coming Soon`}
            style={{ transform: this.state.lv3 }} />
          <div className="tile__title">{`Coming Soon`}</div>

      </div>

    )
  }
}

export default TileEmpty
