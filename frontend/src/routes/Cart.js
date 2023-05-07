import React from "react";
import "./styles/cart.css";
import CartProduct from "../components/CartProduct";
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
                    <div className="container mt-3 fs-2 text-body fw-bold d-flex flex-row justify-content-between">
                        {cart.length} items in cart
                        <button className="btn btn-primary fw-bold fs-5" onClick={() => dispatch(emptyCart())}>
                            <i class="bi bi-trash"></i> Empty Cart
                        </button>
                    </div>
                    <hr/>
                    <div className="container">
                        <div className="row row-cols-2">
                            <div className="col row row-cols-1">
                                {cart.map((product) => {
                                    cartTotal += parseFloat(product.selling_price.substring(1));
                                    return (
                                        <div key={product.product_name}>
                                            <CartProduct {...product}/>
                                        </div>
                                    );
                                })}
                            </div>
                            <div class="col d-flex flex-column align-items-start totalInfo">
                                <div class="h5">
                                    Sub-total: ${cartTotal.toFixed(2)}
                                </div>
                                <div class="h5">
                                    Tax: ${(cartTotal * 0.07).toFixed(2)} 
                                </div>
                                <div class="h3 fw-bold">
                                    Total: ${(cartTotal += (cartTotal * 0.07)).toFixed(2)} 
                                </div>
                                {cart.map((product) => {
                                    cartTotal += parseFloat(product.selling_price.substring(1));
                                    return (
                                        <>
                                        <div key={product.product_name} className="my-3 text-body">
                                            {product.selling_price}
                                            <img className="mx-3 cartSub" src={product.image} width="50" height="50"/>
                                            {product.product_name}
                                        </div>
                                        </>
                                    );
                                })}
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