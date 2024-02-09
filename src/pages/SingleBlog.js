import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import blog from '../images/blog-1.jpg'
import Container from "../components/Container";

export const SingleBlog = () => {
  return (
    <>
      <Meta title={"Single Blog"} />
      <BreadCrum title="Single Blog" />
      
      <Container class1="blog-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link
                  className="d-flex align-items-center gap-10"
                  to={"/blogs"}
                >
                  <FaArrowLeftLong className="fs-5" /> Go Back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renassance{" "}
                </h3>
                <img
                  src={blog}
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  saepe, odit sed veritatis ea atque harum nobis unde sapiente
                  fugit, in nesciunt reprehenderit corporis non eos. Eaque
                  accusamus fugiat, corporis cupiditate blanditiis minima quo
                  ratione pariatur quis dolor, optio atque.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};
