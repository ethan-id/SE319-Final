import React from "react";
import { useSelector } from "react-redux";
import Product from "../components/Product";
import { emptyCart } from "../reducers/cartSlice";

const Cart = () => {
    const cart = useSelector((state) => state.cart.value);
    let cartTotal = 0;

    return (
        <div className="container">
            <div class="cartCont">
                {cart.length > 0 ? cart.map((product) => {
                    cartTotal += (product.selling_price);
                    return (
                        <Product {...product}/>
                    );
                }) : <div>Your cart is empty</div>}
            </div>
        </div>
    )
}

export default Cart;