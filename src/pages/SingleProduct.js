import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 500,
    height: 600,
    zoomWidth: 600,
    img: "https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg",
  };

  const [orderedProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrum title="Product Name" />

      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/I/71VxRe7HeKL._AC_UY1000_.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">Kids Hadphoes</h3>
              </div>
              <div class="border-bottom py-3">
                <p class="price">$555</p>
                <div class="d-flex align-items-center gap-10">
                  <ReactStars count={5} size={24} activeColor="#ffd700" />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a class="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div class="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">Hevells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data">goge</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Avalability:</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap  gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  mt-2 mb-3">
                  <h3 className="product-heading">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex gap-15 align-items-center flex-row  mt-2 mb-3">
                  <h3 className="product-heading">Quantity:</h3>
                  <div>
                    <input
                      type="number"
                      style={{ width: "70px" }}
                      min={1}
                      max={10}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      Add to Cart
                    </button>
                    <button className="button signup">Buy it Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/">
                      <IoGitCompareSharp className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <FaRegHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>feeeeeeeeeeeeeeeeeeees</p>
            </div>
          </div>
        </div>
      </Container>

      <Container ainer id="review" class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Reviews</h4>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars count={5} size={24} activeColor="#ffd700" />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="/">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars count={5} size={24} activeColor="#ffd700" />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="review">
                <div className="d-flex gap-10 align-items-center">
                  <h6 className="mb-0">NavDepp</h6>
                  <ReactStars count={5} size={24} activeColor="#ffd700" />
                </div>
                <p className="mt-3">loremmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div class="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
