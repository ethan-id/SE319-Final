import React from "react";
import "./styles/product.css"
import { addToCart } from "../reducers/cartSlice";
import { useDispatch } from "react-redux";

const FeaturedProduct = (product) => {
    const dispatch = useDispatch();

    return (
        <div key={product._id} class="container">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4 d-flex rounded-start align-items-center">
                        <img src={product.image} class="img-fluid featImage" alt={product.product_name}></img>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{product.product_name}</h5>
                        <p class="card-text featDesc">{product.about_product}</p>
                        <div className="d-flex flex-row justify-content-between align-items-center">
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
        </div>
    )
};

export default FeaturedProduct;