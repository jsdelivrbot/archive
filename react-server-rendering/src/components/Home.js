import React from 'react'
export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.clickToChangeColor = this.clickToChangeColor.bind(this)
    this.state = {
      color: '#000'
    }
  }
  clickToChangeColor (e) {
    this.setState({
      color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
    })
  }
  render () {
    return (<div onClick={this.clickToChangeColor} style={{color: this.state.color}}>
              hello from 陈三。
    </div>)
  }
}
