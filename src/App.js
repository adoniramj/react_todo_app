import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       userName: 'Adoniram',
       todoItems: [
         {action: 'Buy paper', done: false},
         {action: 'Change oil', done: false},
         {action: 'Buy a car', done: false}
       ],
       newItem: '',
       itemsDue: ''
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
      }, () => this.itemReport()) //setState(updater[, callback]). setState is async.
    }
  }

  itemReport = () => {
    let itemsDue = this.state.todoItems.filter(item => !item.done).length
    if (itemsDue === 1){
      this.setState({ itemsDue: `${itemsDue} item is due`})
    } else if (itemsDue > 1) {
      this.setState({ itemsDue: `${itemsDue} items are due`})
    } else {
      this.setState({ itemsDue: ''})
    }
  }

  render() {
    return (
      <div>
        <h4 className='bg-primary text-white text-center p-2'>
        {this.state.userName}'s To Do List
        ({ this.state.itemsDue })
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

  componentDidMount(){
    this.itemReport()
  }
}

