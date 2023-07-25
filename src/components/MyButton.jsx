import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSymbolAction, removeSymbolsAction, replaceSymbolsAction} from '../store/calculateReducer'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 0.5em;
  width: ${({width}) => width || "auto"};
  height: ${({height}) => height || "auto"}; 
  grid-column: ${({gc}) => gc || "0"};
  grid-row: ${({gr}) => gr || "0"};
  background: ${({background}) => background || "rgb(58, 56, 56)"};
  color: ${({color}) => color || "aliceblue"};
  border: silver solid 0.1em;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transform: translateY(-0.5em);
  }
`

const MyButton = ({children, width, height, color, background, gc, gr}) => {

  const dispatch = useDispatch()
  const expression = useSelector(state => state.expression)

  const isSign = (value) => {
    return (value === "/" || value === "+" || value === "*" || value === '-' || value ==='.')
  }

  const addSymbol = () => {
    switch(children) {
      case "C":
        dispatch(removeSymbolsAction())
        break
      case "=":
        let result = eval(expression)
        dispatch(replaceSymbolsAction(result))
        break
      default:
        if(!((isSign(expression.slice(-1)) && isSign(children)) || (isSign(children) && expression.slice(-1) === "")))
        dispatch(addSymbolAction(children))
    }

  }
  return (
    <StyledButton width={width} height={height} color={color} background={background} gc={gc} gr={gr}
    onClick = {() => addSymbol()}>
      {children}
    </StyledButton>
  )
}

export default MyButton