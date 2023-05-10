import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../reducers/cartSlice";

const ProductPage = () => {
    const dispatch = useDispatch();
    const activeProduct = useSelector((state) => state.product.value);
    const orderCount = Math.floor(Math.random() * 100);
    
    return (
        <section className="py-5">
            <div className="container">
                <div className="row gx-5">
                <aside className="col-lg-6">
                    <div className="border rounded-4 mb-3 d-flex justify-content-center">
                        <a data-fslightbox="mygalley" className="rounded-4" target="_blank" href={activeProduct.product_url} data-type="image">
                            <img className="rounded-4 fit" src={activeProduct.image} />
                        </a>
                    </div>
                </aside>
                <main className="col-lg-6">
                    <div className="ps-lg-3">
                    <h2 className="title text-dark">{activeProduct.product_name}</h2>
                    <div className="text-muted">
                        {activeProduct.model_number}
                    </div>
                    <div className="d-flex flex-row my-3">
                        <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>{orderCount} orders</span>
                        <span className="text-success ms-2">In stock {activeProduct.stock ? `(${activeProduct.stock})` : ""}</span>
                    </div>

                    <div className="mb-3">
                        <span className="h3">{activeProduct.selling_price}</span>
                    </div>

                    <div className="row">
                        {activeProduct.brand ? <>
                        <dt className="col-3">Brand</dt>
                        <dd className="col-9">{activeProduct.brand}</dd></> : <></>}

                        {activeProduct.category ? <>
                        <dt className="col-3">Category</dt>
                        <dd className="col-9">{activeProduct.category}</dd></> : <></>}
                    </div>

                    <p>
                        {activeProduct.about_product}
                    </p>

                    <button className="btn btn-primary" onClick={() => dispatch(addToCart(activeProduct))}>
                        <i className="bi bi-cart"></i> Add To Cart
                    </button>
                    </div>
                </main>
                </div>
            </div>
        </section>
    )
};

export default ProductPage;