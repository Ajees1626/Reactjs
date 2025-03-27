import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';


const Cart = () => {

  const {CartItem,food_list,removeFromCart} = useContext(StoreContext); 

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-tittle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
         {food_list.map((item,index) => {
          if(CartItem[item._id]>0)
          {
            return (
              <div>
                  <div className='cart-item-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>{item.price*cartItem[item._id]}</p>
                <p>X</p>

                </div>
                <hr />

              </div>
            
            )
          }
         })}
      </div>
    </div>
  )
}

export default Cart
