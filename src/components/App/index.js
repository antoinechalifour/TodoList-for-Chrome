import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import Nav from '../Nav'
import TodoList from '../TodoList'
import Input from '../Input'

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    width: 350px;

    font-family: 'Fresca', sans-serif;
    font-size: 16px;
    
    background: #f7f7f9;
    color: #373d3f;
  }
`

const Body = styled.div`
  overflow-y: scroll;
  max-height: 450px;
`

const App = () => (
  <HashRouter>
    <div>
      <Nav />

      <Body>
        <Route
          path='/:filter'
          render={({ match }) => <TodoList filter={match.params.filter} />}
        />
      </Body>

      <Input />
    </div>
  </HashRouter>

)

export default App
