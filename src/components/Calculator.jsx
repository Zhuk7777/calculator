import React from 'react'
import classes from '../styles/Calculator.module.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const Calculator = () => {
  return (
    <div className={classes.calc}>
      <Display/>
      <ButtonPanel/>
    </div>
  )
}

export default Calculator