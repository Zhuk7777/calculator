import React from 'react'
import { useSelector } from 'react-redux'
import classes from '../styles/Display.module.css';

const Display = () => {
  const expression = useSelector(state => state.expression)
  
  return (
    <input className={classes.display} value={expression}/>
  )
}

export default Display