import { createStore, applyMiddleware } from 'redux'
import { wrapStore } from 'react-chrome-redux'
import reducers from './reducers'

const persistStore = store => next => action => {
  const result = next(action)

  chrome.storage.sync.set({ store: JSON.stringify(store.getState()) })

  return result
}

chrome.storage.sync.get('store', data => {
  const initialState = data && data.store ? JSON.parse(data.store) : {}
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
      persistStore
    )
  )
  wrapStore(store, { portName: 'MY APP' })
})
