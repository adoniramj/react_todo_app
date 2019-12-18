import React, { Component } from 'react'

import { Header } from './Header'
import { IncompleteItems } from './components/IncompleteItems'
import { ItemInsertion } from './components/ItemInsertion'
import { VisibilityControl } from './components/VisibilityControl'
import { CompletedItems } from './components/CompletedItems'

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
       ],
       showCompleted: true
    }
  }
  //Use map because we require all the members of todoItems
  toggleDone = (actionItem) => this.setState(
    { todoItems: this.state.todoItems.map(
      item => item.action === actionItem.action ? {...item, done: !item.done} : item)
    })
    //createNewItem is set to ItemInsertion as props. 
    //This is required to be defined in App.js because it needs to access todoItems.
    createNewItem = (task) => {
      if (!this.state.todoItems.find(item => item.action === task)){
          this.setState({todoItems: [{action: task, done: false}, ...this.state.todoItems]})
      }
    }

    showCompleted = () => {
      this.state.showCompleted === true ? this.setState({showCompleted: false}) : this.setState({showCompleted: true})
    }

  //Every time there is a change in state the render function is executed.
  render() {
    return (
      <div>
        {/* See the syntax for importing Header and Itemstable. They are different. */}
        <Header 
          name={this.state.userName} 
          tasks={this.state.todoItems}
        />

        <ItemInsertion callback={ this.createNewItem }/>
        <IncompleteItems 
          todoItems={this.state.todoItems} 
          callback={this.toggleDone}
        />
        <div className='bg-secondary text-white text-center p-2'>      
          <VisibilityControl 
            description={'Completed tasks'} 
            callback={this.showCompleted} 
          />
        </div>  
        { !this.state.showCompleted ?
          <CompletedItems 
          tasks={ this.state.todoItems } 
          callback={this.toggleDone}
          /> : null
        }
      </div>
    )
  }
  
}

 
