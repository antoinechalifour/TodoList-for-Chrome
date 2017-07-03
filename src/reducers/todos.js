import * as actions from '../actions/todos'

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        {
          id: action.id,
          text: action.text,
          status: 'todo'
        },
        ...state
      ]

    case actions.TOGGLE_TODO:
      return state.map(x => {
        if (x.id !== action.id) {
          return x
        }

        return {
          ...x,
          status: x.status === 'todo' ? 'done' : 'todo'
        }
      })

    case actions.REMOVE_TODO:
      return state.filter(x => x.id !== action.id)

    case actions.MOVE_TODO:
      const nextState = []
      const movedTodo = state.find(x => x.id === action.id)
      console.log(action)

      state.forEach(todo => {
        if (todo.id === action.id) {
          return
        }

        nextState.push(todo)

        if (todo.id === action.next) {
          nextState.push(movedTodo)
        }
      })

      return nextState

    default:
      return state
  }
}

export default reducer
