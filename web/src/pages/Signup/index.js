import * as React from 'react'
import styled from 'styled-components'

import {
  th,
  background,
  margin,
  padding,
  flexbox,
} from './../../components/Theme/styled'

const Label = styled('label')`
  padding: ${th.space(2)}px ${th.space(3)}px;
`

const Input = styled('input')`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 200px;
  color: ${th.color('white')};
  padding: ${th.space(2)}px ${th.space(1)}px;
  font-size: inherit;
`

const Main = styled('form')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const Form = styled('form')``

const Box = styled('div')`
  ${background}
  ${padding}
  ${margin}
  ${flexbox}
`
const Field = ({ type, name, label, ...props }) => (
  <Box {...props} flexDirection="coloumn">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} />
  </Box>
)

export const Signup = () => {
  return (
    <Main>
      <Form>
        <Field type="text" name="name" label="Nome" />
        <Field type="text" name="email" label="E-mail" />
      </Form>
    </Main>
  )
}
