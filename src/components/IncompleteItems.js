import React, { Component } from 'react'

export class IncompleteItems extends Component {
  /* this.props.tasks is the todoItems in App.js
  The whole array is passed to generateRows to create the table body.
  this.props.callback is the toggleDone function of App.js.
  Each row has an onChange property attached. When the checkbox is clicked, 
  the item for that row is passed as an argument to toggleDone to change the state of done.
  Since the state todoItems is in App.js toggleDone must reside in App.js
  */
  generateRows = (itemsArray) => itemsArray.filter(item => item.done === false).map(item => 
    <tr>
      <td>{item.action}</td>
      <td>
        <input
          type='checkbox'
          checked={item.done}
          onChange={() => this.props.callback(item)} />
      </td>
    </tr>)

  render() {
    return (
      <div>
        <table className='table table-dark'>
          <thead>
            <tr>
              <td>Description of Incomplete Items</td>
              <td>Done</td>
            </tr>
          </thead>
          <tbody>
            {this.generateRows(this.props.todoItems)}
          </tbody>
        </table>
      </div>
    )
  }
}