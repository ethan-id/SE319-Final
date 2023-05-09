import React from "react";
import "./styles/payment.css"

const Payment = (props) => {
    return (
        <div class="container p-0">
            <div class="card px-4">
                <p class="h2 py-3">Payment Details</p>
                <div class="row gx-3">
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Name</p>
                            <input class="form-control mb-3" type="text" placeholder="First & Last Name On Card"></input>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Card Number</p>
                            <input class="form-control mb-3" type="text" placeholder="1234 5678 4356 7890"></input>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">Expiry</p>
                            <input class="form-control mb-3" type="text" placeholder="MM/YYYY"></input>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex flex-column">
                            <p class="text mb-1">CVV/CVC</p>
                            <input class="form-control mb-3 pt-2 " type="password" placeholder="***"></input>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="payButton btn btn-primary mb-3 fw-bold fs-4">
                            <span class="">Pay ${props.total}</span>
                            <i class="bi bi-arrow-bar-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Payment;