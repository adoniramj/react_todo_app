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

  todoTable = () => //Do not use {} after => this will prevent the function from returning any, if used the use return
     this.state.todoItems.map(item => 
      <tr key={ item.action }> {/* the keys are for React only */}
        <td>{ item.action }</td>
        <td>
          <input type='checkbox' 
                 checked={ item.done }
                 onChange={ () => this.toggleTodo(item)} />
        </td>
      </tr>
    )
    
  render() { //the render method is executed everytime the setState method is called.
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
          <table className='table table-striped table-bordered'>
            <thead>
              <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>
              { this.todoTable() } {/* Since this line of code is inside the render function it will be executed everytime render is executed */}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  componentDidMount(){
    this.itemReport()
  }
}

