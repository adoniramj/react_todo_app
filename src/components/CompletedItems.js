import React, { Component } from 'react'

export class CompletedItems extends Component {

  generateRows = (itemsArray) => itemsArray.filter(item => item.done === true).map(item => 
    <tr key={item.action}>
      <td>{item.action}</td>
      <td>
        <input
          type='checkbox'
          checked={item.done}
          onChange={() => this.props.callback(item)}/>
      </td>
    </tr>)

  render() {
    return(
      <div>
        <table className='table'>
          <thead>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
              {this.generateRows(this.props.tasks)}
          </tbody>
        </table>
      </div>
    )
  }
}