import React, { Component } from 'react'

export class ItemInsertion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: ''
    }
  }

  ItemChange = (event) => {
    this.setState({ newItem: event.target.value})
  }
  render() {
    return (
      <div className='my-1'>
          <input
            className='form-control'
            value={ this.state.newItem }
            onChange={ this.ItemChange } />
      </div>
    )
  }
}

export default ItemInsertion
