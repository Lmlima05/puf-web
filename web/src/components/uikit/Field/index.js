import * as React from 'react'

import { Box } from './../Box'
import { Label } from './../Label'
import { Input } from './../Input'

export const Field = ({ type, name, label, ...props }) => (
  <Box {...props} flexybox="coloumn">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} />
  </Box>
)
