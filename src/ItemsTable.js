import React from 'react'

 class ItemsTable extends React.Component {
  /* this.props.tasks is the todoItems in App.js
  The whole array is passed to generateRow to create the table body.
  this.props.callback is the toggleDone function of App.js.
  Each row has an onChange property attached. When the checkbox is clicked, 
  the item for that row is passed as an argument to toggleDone to change the state of done.
  Since the state of the items is in App.js toggleDone must reside in App.js
  */
  generateRow(array) {
   return array.map((item) => {
      return (
        <tr key={item.action}>
          <td>{item.action}</td>
          <td><input 
                type='checkbox' 
                checked={item.done}
                onChange={ () => this.props.callback(item)}/></td>
        </tr>
      )
    })
  }
    
  render() {
    return (
      <div>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Description</th><th>Done</th>
            </tr>
          </thead>
          <tbody>
            {this.generateRow(this.props.tasks)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ItemsTable
