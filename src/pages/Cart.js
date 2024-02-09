import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import watch from "../images/watch.jpg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrum title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div class="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div class="cart-data py-3 d-flex justify-content-between align-items-center mb-2">
              <div className="cart-col-1 d-flex align-items-center gap-15">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="watch" />
                </div>
                <div className="w-75">
                  <p>Gdodddd</p>
                  <p>Size: gsdgsdg</p>
                  <p>Color: gfgr</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$5555</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <MdDelete className="text-danger " />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$5555</h5>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to={"/product"} className="button">
                Continue to Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: $100</h4>
                <p>Taxes and Shipping</p>
                <Link to={"/checkout"} className="button">
                  CheckOut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
