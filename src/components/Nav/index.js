import React from 'react'
import { NavLink, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 16px;
  display: flex;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .24);
  color: #8c979a;

  a {
    flex: 1;
    display: block;
    text-align: center;
    text-decoration: none;
    color: inherit;
  }
`

const Nav = () => (
  <Container>
    <NavLink
      to='/all'
      activeStyle={{ textDecoration: 'underline' }}
    >
      All
    </NavLink>
    <NavLink
      to='/todo'
      activeStyle={{ textDecoration: 'underline' }}
    >
      Todo
    </NavLink>
    <NavLink
      to='/done'
      activeStyle={{ textDecoration: 'underline' }}
    >
      Done
    </NavLink>
    <Route
      exact
      path='/'
      render={() => <Redirect to='/all' />}
    />
  </Container>
)

export default Nav
