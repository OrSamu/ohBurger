import React from 'react'

import Card from '../../UI/card';
import MealItem from '../mealItem';
import classes from './AvailableBurgers.module.css'

const burgersMock = [
    {
        id: 1,
        name: "Double Cheeseburger",
        description: "Original double steak-burger with cheese",
        price: 17.00
    },
    {
        id: 2,
        name: "Cheeseburger",
        description: "Original steak-burger with cheese",
        price: 10.00
    },
    {
        id: 3,
        name: "Garlic Double Cheeseburger",
        description: "Double steak-burger with garlic and cheese",
        price: 19.00
    },
    {
        id: 4,
        name: "Western Burger",
        description: "western bbq ’n cheese steak-burger",
        price: 20.00
    },
    {
        id: 5,
        name: "Oreo® Cookie Milkshake",
        description: "Oreo's cookies ’n cream milkshake",
        price: 10.00
    },
    {
        id: 6,
        name: "Nutella Milkshake",
        description: "Nutella's milkshake",
        price: 10.00
    },
    {
        id: 7,
        name: "Reese’s® Milkshake",
        description: "Reese’s® chocolate peanut butter milkshake",
        price: 10.00
    },
]

const AvailableBurgers = () => {
    const menu = burgersMock.map(menuItem => <MealItem
        id={menuItem.id}
        key={menuItem.id}
        name={menuItem.name}
        description={menuItem.description}
        price={menuItem.price}
        />);

  return <section className={classes.meals}>
    <Card>
        <ul>
            {menu}
        </ul>
    </Card>
  </section>
}

export default AvailableBurgers