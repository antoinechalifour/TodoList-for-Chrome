import React, { Component } from 'react'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

const Container = styled.div`
  padding: 0 16px;
`

const TextField = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: inherit;
  font-family: inherit;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border-top: 1px solid #d7d7d9;
`

class Input extends Component {
  constructor (props) {
    super(props)

    this.state = { input: '' }

    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp (e) {
    if (e.keyCode === 13) {
      this.props.actions.addTodo(this.state.input, uuid())

      this.setState({ input: '' })
    }
  }

  render () {
    return (
      <Container>
        <TextField
          type='text'
          placeholder='Write something...'
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
          onKeyUp={this.handleKeyUp}
        />
      </Container>
    )
  }
}

export default Input
