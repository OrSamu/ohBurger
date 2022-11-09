import React, { useReducer } from 'react';

import CartContext from '..';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            const updatedTotalAmount = state.totalAmount + (action.item.amount * action.item.price);
            const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
            const existingItem = state.items[existingItemIndex];
            let updatedItems;

            if (existingItem) {
                const updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.item.amount
                };

                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            }
            else {
                updatedItems = state.items.concat(action.item)
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };

        case 'REMOVE_ITEM_FROM_CART':
            const itemToDeleteIndex = state.items.findIndex((item) => item.id === action.id);
            const itemToDelete = state.items[itemToDeleteIndex];
            const newTotalAmount = state.totalAmount - itemToDelete.price;
            let newItems;

            if (itemToDelete.amount === 1) {
                newItems = state.items.filter(item => item.id !== action.id);
            }
            else {
                const updatedItem = { ...itemToDelete, amount: itemToDelete.amount - 1 };
                newItems = [...state.items];
                newItems[itemToDeleteIndex] = updatedItem;
            }
            console.log(newTotalAmount);
            return {
                items: newItems,
                totalAmount: newTotalAmount
            };

        default:
            return state;
    }
}

const CartContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD_ITEM_TO_CART', item: item });
    }

    const removeItemFromCartHandler = (id) => {
        console.log(`this is ctx provider - ${id}`);
        dispatchCartAction({ type: 'REMOVE_ITEM_FROM_CART', id: id });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;