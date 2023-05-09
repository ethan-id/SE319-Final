import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartSlice";

const ProductPage = () => {
    const dispatch = useDispatch();
    const activeProduct = useSelector((state) => state.product.value);
    const orderCount = Math.floor(Math.random() * 100);
    
    return (
        <section class="py-5">
            <div class="container">
                <div class="row gx-5">
                <aside class="col-lg-6">
                    <div class="border rounded-4 mb-3 d-flex justify-content-center">
                        <a data-fslightbox="mygalley" class="rounded-4" target="_blank" href={activeProduct.product_url} data-type="image">
                            <img class="rounded-4 fit" src={activeProduct.image} />
                        </a>
                    </div>
                </aside>
                <main class="col-lg-6">
                    <div class="ps-lg-3">
                    <h2 class="title text-dark">{activeProduct.product_name}</h2>
                    <div className="text-muted">
                        {activeProduct.model_number}
                    </div>
                    <div class="d-flex flex-row my-3">
                        <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>{orderCount} orders</span>
                        <span class="text-success ms-2">In stock {activeProduct.stock ? `(${activeProduct.stock})` : ""}</span>
                    </div>

                    <div class="mb-3">
                        <span class="h3">{activeProduct.selling_price}</span>
                    </div>

                    <div class="row">
                        {activeProduct.brand ? <>
                        <dt class="col-3">Brand</dt>
                        <dd class="col-9">{activeProduct.brand}</dd></> : <></>}

                        {activeProduct.category ? <>
                        <dt class="col-3">Category</dt>
                        <dd class="col-9">{activeProduct.category}</dd></> : <></>}
                    </div>

                    <p>
                        {activeProduct.about_product}
                    </p>

                    <button className="btn btn-primary" onClick={() => dispatch(addToCart(activeProduct))}>
                        <i class="bi bi-cart"></i> Add To Cart
                    </button>
                    </div>
                </main>
                </div>
            </div>
        </section>
    )
};

export default ProductPage;