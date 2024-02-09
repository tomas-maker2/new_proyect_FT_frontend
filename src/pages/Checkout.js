import React from "react";
import { Link } from "react-router-dom";
import { IoReturnDownBack } from "react-icons/io5";
import watch from '../images/watch.jpg'
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
    <div class="row">
            <div class="col-7">
              <div class="checkout-left-data">
                <h3 class="website-name">Dev Corner</h3>
                <nav style={{ "--bs-breadcrumb-divider": ">" }}>
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link className="text-dark total-price" to="/cart">
                        Cart
                      </Link>
                    </li>
                    &nbsp;/
                    <li class="breadcrumb-item total-price active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /<li class="breadcrumb-item total-price active">Shipping</li>
                    &nbsp;/
                    <li class="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact Information</h4>
                <p className="user-details total">
                  tomsaefw(tomasbolotnicoff@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  className="d-flex gap-15 flex-wrap justify-content-between"
                  action=""
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input placeholder="First Name" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <input placeholder="Last Name" className="form-control" />
                  </div>
                  <div className="w-100">
                    <input placeholder="Address" className="form-control" />
                  </div>
                  <div className="w-100">
                    <input
                      placeholder="Apratment, Suite, etc"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input placeholder="City" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input placeholder="ZipCode" className="form-control" />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to={"/cart"} className="text-dark">
                        <IoReturnDownBack className="mb-2" /> Return to Cart
                      </Link>
                      <Link to={"/cart"} className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex mb-2 gap-10 align-items-center">
                <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                        <span style={{top:"-10px", right:"2px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                        <img className="img-fluid" src={watch} alt="alt"/>
                    </div>
                    <div>
                        <h5 className="total-price">vvsvv</h5>
                        <p className="total-price">s / #svfergeg</p>
                    </div>
                </div>
                <div className="flex-grow-1">
                    <h5 className="total">$324234</h5>
                </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">SubTotal</p>
                  <p className="total-price">$1000</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$1000</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$1000</h5>
              </div>
            </div>
          </div>
    </Container>
    </>
  );
};

export default Checkout;
