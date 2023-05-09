import React from "react";
import "./styles/cart.css";
import CartProduct from "../components/CartProduct";
import Payment from "../components/Payment";
import { emptyCart } from "../reducers/cartSlice";
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.value);
    let cartTotal = 0;

    return (
        <div>
            <div class="">
                {cart.length === 0 ? (
                    <div class="px-4 py-5 my-5 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-25 m-3 bi bi-cart-dash" viewBox="0 0 16 16">
                            <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                        <h1 class="display-5 fw-bold text-body-emphasis">You have no items in your cart...</h1>
                    </div>
                ) :
                <div>
                    <div className="container my-3">
                        <div className="row row-cols-2">
                            <div className="col row row-cols-1">
                                <div className="d-flex flex-row justify-content-between align-items-center mb-5">
                                    <div className="fs-3 fw-bold">
                                        {cart.length} items in cart
                                    </div>
                                    <button className="btn btn-secondary fw-bold emptyBtn fs-5 px-3" onClick={() => dispatch(emptyCart())}>
                                        <i class="bi bi-trash"></i> Empty Cart
                                    </button>
                                </div>
                                <div className="container productBox">
                                    {cart.map((product) => {
                                        cartTotal += parseFloat(product.selling_price.substring(1));
                                        return (
                                            <div key={product.product_name}>
                                                <CartProduct {...product}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div class="col d-flex flex-column align-items-center m-auto totalInfo">
                                <div class="h3">
                                    Sub-total: ${cartTotal.toFixed(2)}
                                </div>
                                <div class="h3">
                                    Tax: ${(cartTotal * 0.07).toFixed(2)} 
                                </div>
                                <div class="h1 fw-bold mb-5">
                                    Total: ${(cartTotal += (cartTotal * 0.07)).toFixed(2)} 
                                </div>
                                <div className="">
                                    <Payment {...{total: (cartTotal).toFixed(2)}}/>
                                </div>
                            </div>      
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Cart;