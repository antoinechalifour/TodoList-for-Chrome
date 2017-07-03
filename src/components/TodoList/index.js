import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TodoList from './TodoList'
import * as actions from '../../actions/todos'

const mapStateToProps = (state, ownProps) => {
  let todos

  if (ownProps.filter === 'all') {
    todos = state.todos
  } else {
    todos = state.todos.filter(x => x.status === ownProps.filter)
  }

  return { todos }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
