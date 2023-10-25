export const background = props =>
  props.bg && `background: ${props.theme.colors[props.bg]};`

export const color = props =>
  props.color && `color: ${props.theme.colors[props.color] || props.color};`

export const fontSize = props =>
  props.fontSize && `fontSize: ${props.theme.fontSizes[props.fontSize]};`

/*const genPropCss = (propCss, theme, propComp) => props =>
  props[propComp] && `${propCss}: ${props.theme[theme][props[propComp]]}`

export const background = genPropCss('background', 'colors', 'bg')
export const fontSize = genPropCss('font-size', 'fontSizes', 'fontSize')
export const color = genPropCss('color', 'colors', 'color')*/
