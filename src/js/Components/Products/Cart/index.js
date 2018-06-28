import React from 'react';
import { connect } from "react-redux"

export const CartItemQuantity = (cartitems) => {

  return cartitems.reduce((acc,item) => {

    const filteredCartItem = acc.filter(item2 => item2.id === item.id)[0]
    filteredCartItem !== undefined ? filteredCartItem.quantity++ : acc.push({...item,quantity:1})
    return acc
  },[])
}