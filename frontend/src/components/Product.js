import React from "react";
import "./product.css";

const Product = (product) => {
    return (
        <div class="container my-2">
            <div class="col">
                <div class="card">
                    <img class="card-img productImage" src={product.thumbnail} alt={product.title}></img>
                    <div class="card-img-overlay d-flex justify-content-end">
                        <a href="#" class="card-link text-danger like">
                            <i class="bi bi-heart"></i>
                        </a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{product.title}</h4>
                        <h6 class="card-subtitle mb-2 text-muted">{product.category}</h6>
                        <p class="card-text">{product.description}</p>
                        <div class="buy d-flex justify-content-between align-items-center">
                            <div class="price text-success">
                                <h5 class="mt-4">${product.price}</h5>
                            </div>
                            <button class="btn btn-danger mt-3">
                                <i class="bi bi-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Product;