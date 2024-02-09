import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from '../images/wish.svg'
import watch from '../images/watch.jpg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';
import prodcompare from '../images/prodcompare.svg'

const ProductCard = (props) => {
  const { grid } = props
  let location = useLocation();
  
  return (
    <>
      <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={'/product/:id'} className="product-card position-relative">
            <div className="wishlist-icon position-absolute"> 
                <button className="border-0 bg-transparent">
                    <img src={wish} alt="wish"/>
                </button>
            </div>
          <div className="product-image">
            <img src={watch} alt="watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulck 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ex labore iure! Voluptatibus laboriosam nemo sunt inventore aspernatur accusantium quibusdam odio distinctio facere. Maxime fugiat at deserunt laboriosam et ratione.</p>
            <p className="price">$1000</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare"/>
                </button>
                <button className="border-0 bg-transparent">
                    <img src={addcart} alt="addcart"/>
                </button>
                <button className="border-0 bg-transparent">
                    <img src={view} alt="view"/>
                </button>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute"> 
                <Link>
                    <img src={wish} alt="wish"/>
                </Link>
            </div>
          <div className="product-image">
            <img src={watch} alt="watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulck 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ex labore iure! Voluptatibus laboriosam nemo sunt inventore aspernatur accusantium quibusdam odio distinctio facere. Maxime fugiat at deserunt laboriosam et ratione.</p>
            <p className="price">$1000</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare"/>
                </button>
                <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="addcart"/>
                </button>
                <button className="border-0 bg-transparent">
                    <img src={view} alt="view"/>
                </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
