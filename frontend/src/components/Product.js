import React from "react";
import "./styles/product.css";
import { Link } from "react-router-dom";
import { addToCart } from "../reducers/cartSlice";
import { setActiveProduct } from "../reducers/productSlice";
import { useDispatch } from "react-redux";

const Product = (product) => {
    const dispatch = useDispatch();

    return (
        <div key={product._id} class="container my-2">
            <div class="col">
                <div class="card">
                    <img class="card-img productImage" src={product.image} alt={product.product_name}></img>
                    <div class="card-body">
                        <h4 class="card-title productTitle">{product.product_name}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">{product.category}</h6>
                        <p class="card-text productDesc">{product.about_product}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="text-success">
                                <h5 class="m-auto">{product.selling_price}</h5>
                            </div>
                            <div>
                            <button className="btn btn-primary mx-1" onClick={() => dispatch(setActiveProduct(product))}>
                                <Link className="text-white" to={`${product.uniq_id}`}>Details »</Link>
                            </button>
                            <button className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>
                                <i class="bi bi-cart"></i> Add To Cart
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;