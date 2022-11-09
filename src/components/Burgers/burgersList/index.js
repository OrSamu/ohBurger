import React from 'react'
import AvailableBurgers from '../availableBurgers'
import BurgersSummary from '../burgersSummary'

const BurgersList = () => {
  return (
    <>
        <BurgersSummary />
        <AvailableBurgers />
    </>
  )
}

export default BurgersList