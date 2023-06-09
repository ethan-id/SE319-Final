import React from "react";
import "./styles/ViewData.css";
import Pagination from "../components/Pagination";
import Product from "../components/Product";
import FeaturedProduct from "../components/FeaturedProduct";
import { setProductData } from "../reducers/dataSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";

const ViewData = () => {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.data.value);
    const originalData = useSelector((state) => state.data.originalData);
    const isLoading = useSelector((state) => state.data.isLoading);

    let PageSize = 15;

    const [currentPage, setCurrentPage] = useState(1);

    const feat1 = Math.floor(Math.random() * productData.length);
    const feat2 = Math.floor(Math.random() * productData.length);
    const feat3 = Math.floor(Math.random() * productData.length);
    const feat4 = Math.floor(Math.random() * productData.length);
    const feat5 = Math.floor(Math.random() * productData.length);

    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    const currentPageData = productData.slice(firstPageIndex, lastPageIndex);

    const toysCategory = () => {
        dispatch(setProductData(originalData.filter((product) => (product.category.includes("Toys") || product.category.includes("Games")))));
    };
    const artsCategory = () => {
        dispatch(setProductData(originalData.filter((product) => (product.category.includes("Arts") || product.category.includes("Crafts")))));
    };
    const hobbiesCategory = () => {
        dispatch(setProductData(originalData.filter((product) => product.category.includes("Hobbies"))));
    };
    const puzzlesCategory = () => {
        dispatch(setProductData(originalData.filter((product) => (product.category.includes("Arts") || product.category.includes("Crafts")))));
    };
    const sportsCategory = () => {
        dispatch(setProductData(originalData.filter((product) => (product.category.includes("Sports") || product.category.includes("Outdoors")))));
    };
    const homeCategory = () => {
        dispatch(setProductData(originalData.filter((product) => product.category.includes("Home"))));
    };
    const homeDecCategory = () => {
        dispatch(setProductData(originalData.filter((product) => product.category.includes("Home Décor"))));
    };
    const decorCategory = () => {
        dispatch(setProductData(originalData.filter((product) => product.category.includes("Décor"))));
    };
    const furnitureCategory = () => {
        dispatch(setProductData(originalData.filter((product) => product.category.includes("Furniture"))));
    };
    const learningCategory = () => {
        dispatch(setProductData(originalData.filter((product) => (product.category.includes("Learning") || product.category.includes("Education")))));
    };
    const officeCategory = () => {
        dispatch(setProductData(originalData.filter((product) => (product.category.includes("Office")))));
    };
    const schoolCategory = () => {
        dispatch(setProductData(originalData.filter((product) => (product.category.includes("School")))));
    };
    const reset = () => {
        dispatch(setProductData(originalData));
    };
    
    return (
        <div>
            {!isLoading ? 
            <>
            <div id="myCarousel" className="carousel p-5 slide pointer-event" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item">
                        <div className="row row-cols-2 align-items-center">
                            <FeaturedProduct {...originalData[feat1]}/>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <div className="row row-cols-2">
                            <FeaturedProduct {...originalData[feat2]}/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row row-cols-2">
                            <FeaturedProduct {...originalData[feat3]}/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row row-cols-2">
                            <FeaturedProduct {...originalData[feat4]}/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row row-cols-2">
                            <FeaturedProduct {...originalData[feat5]}/>
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

            <div className="container" id="products">
                <div className="row row-cols-2 productView pt-4">
                    <div className="col-sm-2">
                        <div className="card">
                            <div className="card-header fs-5">
                                Categories
                            </div>
                            <ul className="list-group list-group-flush">
                                <button className="list-group-item list-group-item-action" onClick={() => toysCategory()}>
                                    Toys & Games
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => artsCategory()}>
                                    Arts & Crafts
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => hobbiesCategory()}>
                                    Hobbies
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => puzzlesCategory()}>
                                    Puzzles
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => sportsCategory()}>
                                    Sports & Outdoors
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => homeDecCategory()}>
                                    Home Décor
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => homeCategory()}>
                                    Home & Kitchen 
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => decorCategory()}>
                                    Décor
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => furnitureCategory()}>
                                    Furniture
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => learningCategory()}>
                                    Learning & Education
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => officeCategory()}>
                                    Office
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => schoolCategory()}>
                                    School
                                </button>
                                <button className="list-group-item list-group-item-action" onClick={() => reset()}>
                                    Reset
                                </button>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-10">
                        <div className="fs-4">
                            {(productData.length).toLocaleString()} Results...
                        </div>
                        <div key={currentPageData.length} className="row row-cols-3">
                            {currentPageData.map((element) => {
                                return(
                                    <Product {...element}/>
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
            </div>
            </> : 
            <div className="d-flex justify-content-center  fs-3 m-5">
                <div className="spinner-border spin fs-1 loading" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
        </div>
    )
}

export default ViewData;