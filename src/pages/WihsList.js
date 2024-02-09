import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";

const WihsList = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrum title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100 "
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Smasung galazy note 10</h5>
                  <h6 className="price">$400</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100 "
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Smasung galazy note 10</h5>
                  <h6 className="price">$400</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100 "
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">Smasung galazy note 10</h5>
                  <h6 className="price">$400</h6>
                </div>
              </div>
            </div>
          </div>
      </Container>
    
    </>
  );
};

export default WihsList;
