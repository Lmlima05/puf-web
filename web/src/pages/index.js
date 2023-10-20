import * as React from 'react'
import styled from 'styled-components'
import { Theme } from './../components/Theme'

const BaseButton = ({ className, children }) => (
  <div className={className}>
    MEU BOTÃO
    {children}
  </div>
)
const Button = styled(BaseButton)`
  background: ${props => props.theme.colors[props.bg]};
`

export const App = () => (
  <Theme>
    <Button bg="blue">Meu App</Button>
    <Button bg="green">Meu App</Button>
    <Button bg="red">Meu App</Button>
    <Button bg="yellow ">Meu App</Button>
  </Theme>
)
