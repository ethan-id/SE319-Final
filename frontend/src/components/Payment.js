import React from "react";
import "./styles/payment.css"
import { useSelector, useDispatch } from "react-redux";
import { emptyCart } from "../reducers/cartSlice";

const Payment = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.value);

    const fetchDelete = () => {
        const check = window.confirm("Are you sure you'd like to place this order?");
        if (check) {
            dispatch(emptyCart());
            cart.forEach((item) => {
                fetch("http://localhost:4000/delete", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ uniq_id: item.uniq_id }),
                })
                .then((response) => console.log(response));
            })
        }
    };

    return (
        <div className="container p-0">
            <div className="card px-4">
                <p className="h2 py-3">Payment Details</p>
                <div className="row gx-3">
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Name</p>
                            <input className="form-control mb-3" type="text" placeholder="First & Last Name On Card"></input>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Card Number</p>
                            <input className="form-control mb-3" type="text" placeholder="1234 5678 4356 7890"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Expires</p>
                            <input className="form-control mb-3" type="text" placeholder="MM/YYYY"></input>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">CVV/CVC</p>
                            <input className="form-control mb-3 pt-2 " type="password" placeholder="***"></input>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="payButton btn btn-primary mb-3 fw-bold fs-4" onClick={() => fetchDelete()}>
                            <a className="pay text-white">Order</a>
                            <i className="bi bi-arrow-bar-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Payment;