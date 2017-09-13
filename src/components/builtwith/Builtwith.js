import React,{Component} from 'react'
import Icon from './../icons/icon'
class Builtwith extends Component {
  render() {
    return (
      <span>
      <div style={{
        position: 'fixed',
        bottom:5,
        right:5,
        zIndex: 2
      }}>
     <Icon icon="gatsby"/>
     <span style={{
      padding: 2
      }}></span>
     <Icon icon="react"/>
     
     </div>
     <div style={{
        position: 'fixed',
        bottom:-90,
        right:-70,
        height: 160,
        width: 160,
        background: '#fff',
        borderRadius: '50%',
        zIndex: 1
      }}></div>
    
      </span>
    )
  }
}

export default Builtwith
