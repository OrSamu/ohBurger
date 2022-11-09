import React from 'react'

import classes from './BurgersSummary.module.css';

const BurgersSummary = () => {
  return (
    <section className={classes.summary}>
        <h2>We got Burgers n Shakes - the best of 2 worlds</h2>
        <p>
            Our burgers are the best you would taste - trust us!
        </p>
        <p>
            Our Milkshakes are irresistible and thick, with real milk and
            fresh ingredients, topped with whipped cream and a cherry.
        </p>
    </section>
  )
}

export default BurgersSummary