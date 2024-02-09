import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCart from "../components/BlogCart";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main-abnner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGE FOR PROS.</h4>
                <h5>iPAD s13+ PRO</h5>
                <p>From $999 or $41.62/mo</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main-abnner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGE FOR PROS.</h4>
                  <h5>iPAD s13+ PRO</h5>
                  <p>
                    From $999 <br />
                    or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main-abnner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGE FOR PROS.</h4>
                  <h5>iPAD s13+ PRO</h5>
                  <p>
                    From $999 <br />
                    or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main-abnner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGE FOR PROS.</h4>
                  <h5>iPAD s13+ PRO</h5>
                  <p>
                    From $999 <br />
                    or $41.62/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main-abnner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGE FOR PROS.</h4>
                  <h5>iPAD s13+ PRO</h5>
                  <p>
                    From $999 <br />
                    or $41.62/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div class="row">
          <div class="col-12">
            <div class="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music and Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music and Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camara" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camaras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camara" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div class="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div class="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>

      <Container class1="marque-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex ">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div class="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCart />
          </div>
          <div className="col-3">
            <BlogCart />
          </div>
          <div className="col-3">
            <BlogCart />
          </div>
          <div className="col-3">
            <BlogCart />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
