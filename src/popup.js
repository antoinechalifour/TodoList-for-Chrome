import './manifest.json'
import './popup.html'
import './icon.png'
import React from 'react'
import { render } from 'react-dom'
import { Store } from 'react-chrome-redux'
import { Provider } from 'react-redux'
import App from './components/App'

const store = new Store({ portName: 'MY APP' })

store.ready().then(() => {
  render(
    <Provider store={store}>
      <App name='Gary' />
    </Provider>,
    document.querySelector('#root')
  )
})
