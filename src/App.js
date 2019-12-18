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
  //Use map because we require all the members of todoItems
  toggleDone = (todo) => this.setState(
    { todoItems: this.state.todoItems.map(
      item => item.action === todo.action ? {...item, done: !item.done} : item)
    })
    //createNewItem is set to ItemInsertion as props. 
    //This is required to be defined in App.js because it needs to access todoItems.
    createNewItem = (task) => {
      if (!this.state.todoItems.find(item => item.action === task)){
          this.setState({todoItems: [{action: task, done: false}, ...this.state.todoItems]})
      }
    }

  //Evert time there is a change in state the render function is executed.
  render() {
    return (
      <div>
        {/* See the syntax for importing Header and Itemstable. They are different. */}
        <Header name={this.state.userName} tasks={this.state.todoItems}/>
        <ItemInsertion callback={ this.createNewItem }/>earning/me?trk=nav_neptune_learning
        {/* Passing the createNewItem function to ItemInsertion component. Notice that inside createNewItem this.state.todoItems "tags" along with the function.*/}
        <ItemsTable tasks={this.state.todoItems} callback={this.toggleDone}/>
      </div>
    )
  }
  
}

 