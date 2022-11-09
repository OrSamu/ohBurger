import React, { useState } from 'react'

import Header from './components/Layout/Header'
import BurgersList from './components/Burgers/burgersList';
import Cart from './components/Cart';
import CartContextProvider from './store/cartContext/cartContextProvider';
import './App.css';


const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartIsShownHandler = () => {
    setCartIsShown(previousValue => !previousValue);
  }

  return (
    <CartContextProvider>
      {cartIsShown ? <Cart onCloseCart={toggleCartIsShownHandler}/> : null}
      <Header onShowCart={toggleCartIsShownHandler}/>
      <main>
        <BurgersList />
      </main>
    </CartContextProvider>
  )
};

export default App;