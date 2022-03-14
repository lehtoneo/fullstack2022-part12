import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders content', () => {
  const todo = {
    text: 'Renders',
    done: true
  }

  render(<Todo todo={todo} onClickDelete={() => undefined} onClickComplete={() => undefined}/>)

  const element = screen.getByText('Renders')
  expect(element).toBeDefined()
})

test('renders completed when completed', () => {
  const todo = {
    text: 'Renders',
    done: true
  }

  render(<Todo todo={todo} onClickDelete={() => undefined} onClickComplete={() => undefined}/>)

  const element = screen.getByText('This todo is done')
  expect(element).toBeDefined()
})

test('renders not when not completed', () => {
  const todo = {
    text: 'Renders',
    done: false
  }

  render(<Todo todo={todo} onClickDelete={() => undefined} onClickComplete={() => undefined}/>)

  const element = screen.getByText('This todo is not done')
  expect(element).toBeDefined()
})