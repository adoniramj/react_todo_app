import React, { Component } from 'react'

export class Header extends Component {

  amountItems = (array) => {
    let itemsDue = array.filter(item => item.done === false).length
    if (itemsDue === 1) {
      return `(${itemsDue} is incomplete)`
    } else if (itemsDue > 1) {
      return `(${itemsDue} are incomplete)`
    }
  }
  render(){
    return(
      <h4 className='bg-primary text-white text-center p2'>
        {this.props.name}'s to do list <br></br>
        {this.amountItems(this.props.tasks)}
      </h4>
    )
  }
}
