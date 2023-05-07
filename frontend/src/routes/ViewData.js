import React from "react";
import "./ViewData.css";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import { addToCart } from "../reducers/cartSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const ViewData = () => {
    const productData = useSelector((state) => state.data.value);
    const isLoading = useSelector((state) => state.data.isLoading);

    let PageSize = 15;

    const [currentPage, setCurrentPage] = useState(1);

    const feat1 = Math.floor(Math.random() * productData.length);
    const feat2 = Math.floor(Math.random() * productData.length);
    const feat3 = Math.floor(Math.random() * productData.length);

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const currentPageData = productData.slice(firstPageIndex, lastPageIndex);

    return (
        <div className="container productView">
            {!isLoading ? 
            <>
            <div class="px-4 py-5 pb-0 text-center">
                <h1 class="display-5 fw-bold">Featured Products</h1>
            </div>

            <div id="myCarousel" className="carousel slide pointer-event" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item">
                        <div className="row row-cols-2">
                            <Product {...productData[feat1]} isFeatured={1}/>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="row row-cols-2">
                            <Product {...productData[feat2]} isFeatured={1}/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row row-cols-2">
                            <Product {...productData[feat3]} isFeatured={1}/>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="row row-cols-2">
                <div className="col-sm-2">
                    <div className="card">
                        <div className="card-header fs-5">
                            Categories
                        </div>
                        <ul className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                                The current link item
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                A second link item
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                A third link item
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">
                                A fourth link item
                            </a>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-10">
                    <div className="row row-cols-3">
                        {currentPageData.map((element) => {
                            return(
                                <Product {...element} isFeatured={0}/>
                            )
                        })}
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={productData.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </div>
            </> : 
            <div class="d-flex justify-content-center  fs-3 m-5">
                <div class="spinner-border spin fs-1" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>}
        </div>
    )
}

export default ViewData;