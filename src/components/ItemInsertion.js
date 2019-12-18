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

  InsertNewItem = () => {
    this.props.callback(this.state.newItem)
    this.setState({ newItem: ''})
  }
  render() {
    return (
      <div className='my-1'>
          <input
            className='form-control'
            value={ this.state.newItem }
            onChange={ this.ItemChange } />
          <button 
            className='btn btn-primary mt-1'
            onClick={ this.InsertNewItem }>Add</button>
      </div>
    )
  }
}

