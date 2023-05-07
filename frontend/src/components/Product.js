import React from "react";
import "./product.css";
import { addToCart } from "../reducers/cartSlice";
import { useDispatch } from "react-redux";

const Product = (product, isFeatured) => {
    const dispatch = useDispatch();

    return (
        <div key={product._id} class="container my-2">
            <div class="col">
                <div class="card">
                    <img class="card-img productImage" src={product.image} alt={product.product_name}></img>
                    <div class="card-body">
                        <h4 class="card-title">{product.product_name}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">{product.category}</h6>
                        {isFeatured ? <></> : <p class="card-text productDesc">{product.about_product}</p>}
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="text-success">
                                <h5 class="m-auto">{product.selling_price}</h5>
                            </div>
                            <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>
                                <i class="bi bi-cart"></i> Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;