export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const MOVE_TODO = 'MOVE_TODO'

export const addTodo = (text, id) => ({
  type: ADD_TODO,
  id,
  text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
})

export const moveTodo = (id, next) => ({
  type: MOVE_TODO,
  id,
  next
})
