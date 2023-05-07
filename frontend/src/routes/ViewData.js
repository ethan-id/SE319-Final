import React from "react";
import "./styles/ViewData.css";
import Product from "../components/Product";
import { useSelector } from 'react-redux';

const ViewData = () => {
    const productData = useSelector((state) => state.data.value);

    return (
        <div className="container productView">
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
                            <Product {...productData[0]}/>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="row row-cols-2">
                            <Product {...productData[1]}/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row row-cols-2">
                            <Product {...productData[2]}/>
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
                        {productData.map((element) => {
                            return(
                                <Product {...element}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewData;