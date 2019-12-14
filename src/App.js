import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       userName: 'Adoniram',
       todoItems: [
         {action: 'Buy paper', done: false},
         {action: 'Change oil', done: false},
         {action: 'Buy a car', done: true}
       ],
       newItem: ''
    }
  }

  updateNewItem = event => {
    this.setState({ newItem: event.target.value})
  }

  addNewItem = () => {
    if(!this.state.todoItems.find(item => item.action === this.state.newItem)) {
      this.setState({
        todoItems: [...this.state.todoItems,
                   { action: this.state.newItem, done: false}],
        newItem: ''
      })
    }
  }
  render() {
    return (
      <div>
        <h4 className='bg-primary text-white text-center p-2'>
        {this.state.userName}'s To Do List
        </h4>
        <div className='container-fluid'>
          <div className='my-1'>
              <input className='form-control'
                     value={ this.state.newItem }
                     onChange={ this.updateNewItem } 
              />
              <button className='btn btn-primary mt-1'
                      onClick={ this.addNewItem }>Add New Item</button>
          </div>
        </div>
      </div>
    )
  }
}

