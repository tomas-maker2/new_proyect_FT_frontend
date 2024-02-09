import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrum title="Login" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Login</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CustomInput type="email"
                      name="email"
                      placeholder="Email"/>

                      <CustomInput  type="password"
                      name="password"
                      placeholder="Password"/>
                 
                  <div className="">
                    <Link className="mt-2 mb-2" to={"/forgot-password"}>
                      Forgot Password
                    </Link>
                    <div className="d-flex justify-content-center align-items-center gap-15">
                      <button className="button border-0" type="submit">
                        Login
                      </button>
                      <Link to={"/signup"} className="button signup">
                        Sign Up
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

      </Container>
     
    </>
  );
};

export default Login;
