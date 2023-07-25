import React from 'react'
import classes from '../styles/ButtonPanel.module.css';
import MyButton from './MyButton';

const ButtonPanel = () => {
  return (
    <div className={classes.btnPanel}>
        <MyButton background={"rgb(211, 96, 14)"}>1</MyButton>
        <MyButton background={"rgb(211, 96, 14)"}>2</MyButton>
        <MyButton background={"rgb(211, 96, 14)"}>3</MyButton>
        <MyButton>/</MyButton>
        <MyButton gr={"1/3"} gc={"5/6"}>C</MyButton>
        <MyButton gr={"3/5"} gc={"5/6"}>=</MyButton>
        <MyButton background={"rgb(211, 96, 14)"}>4</MyButton>
        <MyButton background={"rgb(211, 96, 14)"}>5</MyButton>
        <MyButton background={"rgb(211, 96, 14)"}>6</MyButton>
        <MyButton>*</MyButton>
        <MyButton background={"rgb(211, 96, 14)"}>7</MyButton>
        <MyButton background={"rgb(211, 96, 14)"}>8</MyButton>
        <MyButton background={"rgb(211, 96, 14)"}>9</MyButton>
        <MyButton>+</MyButton>
        <MyButton background={"rgb(211, 96, 14)"} gc={"1/3"}>0</MyButton>
        <MyButton>.</MyButton>
        <MyButton>-</MyButton>
    </div>
  )
}

export default ButtonPanel