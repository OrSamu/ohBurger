import React, { useState, useEffect } from 'react'

import Card from '../../UI/card';
import MealItem from '../mealItem';
import classes from './AvailableBurgers.module.css'

const api = 'https://http-practice-abf78-default-rtdb.firebaseio.com/Meals.json';

const AvailableBurgers = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await fetch(api);

                if (!response.ok) {
                    throw new Error("Failed to fetch menu")
                }

                const data = await response.json();
                const loadedMenuItems = [];
    
                for (const key in data) {
                    loadedMenuItems.push({...data[key]});
                }
    
                setMeals(loadedMenuItems);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setIsLoading(false);
            }

        };

        fetchMenu();
    }, []);

    let content;

    if (isLoading) {
        content = <p>Loading...</p>;
    }
    if (error) {
        content = <p>{error}</p>;
    }
    if (!error && !isLoading) {
        content = meals.map(menuItem => <MealItem
            id={menuItem.id}
            key={menuItem.id}
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
        />);
    }



  return <section className={classes.meals}>
    <Card>
        <ul>
            {content}
        </ul>
    </Card>
  </section>
}

export default AvailableBurgers