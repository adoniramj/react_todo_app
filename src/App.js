import React, { Component } from 'react'

import { Header } from './Header'
import ItemsTable from './ItemsTable'
import { ItemInsertion } from './ItemInsertion'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
       userName: 'Adoniram',
       todoItems: [
         {action: 'Buy paper', done: true},
         {action: 'Change oil', done: false},
         {action: 'Buy a car', done: false},
         {action: 'Buy another car', done: false}
       ]
    }
  }
  
  toggleDone = (todo) => this.setState(
    { todoItems: this.state.todoItems.map(
      item => item.action === todo.action ? {...item, done: !item.done} : item)
    })

  //Evert time there is a change in state the render function is executed.
  render() {
    return (
      <div>
        {/* See the syntax for importing Header and Itemstable. They are different. */}
        <Header name={this.state.userName} tasks={this.state.todoItems}/>
        <ItemInsertion />
        <ItemsTable tasks={this.state.todoItems} callback={this.toggleDone}/>
      </div>
    )
  }
  
}

 