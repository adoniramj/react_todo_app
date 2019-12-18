import React from 'react'

class CompletedItems extends React.Component {
  
  generateRows(tasksArray) {
    return tasksArray.filter(item => item.done === true).map( item => {
      return (
        <tr key={item.action}>
          <td>{item.action}</td>
          <td><input
              type='checkbox'
              checked={ item.done }
              onChange={ () => this.props.callback(item) }
            /></td>
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
            {this.generateRows(this.props.tasks)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CompletedItems;