import React from "react";
import "./styles/product.css";
import { removeFromCart } from "../reducers/cartSlice";
import { useDispatch } from "react-redux";

const CartProduct = (product) => {
    const dispatch = useDispatch();

    return (
        <div key={product._id} className="container">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 d-flex rounded-start align-items-center">
                        <img src={product.image} className="img-fluid " alt={product.product_name}></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.product_name}</h5>
                        <p className="card-text cartProductDesc">{product.about_product}</p>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <div className="text-success">
                                <h5 className="m-auto">{product.selling_price}</h5>
                            </div>
                            <button className="btn btn-secondary" onClick={() => dispatch(removeFromCart(product))}>
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartProduct;