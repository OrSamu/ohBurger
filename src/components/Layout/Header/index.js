import React, { Fragment } from 'react'

import classes from './Header.module.css'
import burgerBackground from '../../../assets/burger.jpg'
import HeaderCartButton from '../HeaderCartButton'


const Header = (props) => {
  return ( 
    <Fragment>
        <header className={classes.header}>
            <h1>Oh, Burger!</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={burgerBackground} alt="OrBurger"></img>
        </div>
    </Fragment>
   )
}

export default Header;