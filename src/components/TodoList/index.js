import { connect } from 'react-redux'
import TodoList from './TodoList'

const mapStateToProps = (state, ownProps) => {
  let todos

  if (ownProps.filter === 'all') {
    todos = state.todos
  } else {
    todos = state.todos.filter(x => x.status === ownProps.filter)
  }

  return { todos }
}

export default connect(mapStateToProps)(TodoList)
