import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrum title="Sign Up" />

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput type="text" name="name" placeholder="Name" />

                <CustomInput type="email" name="email" placeholder="Email" />

                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />

                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div className="">
                  <div className="d-flex justify-content-center align-items-center gap-15">
                    <button className="button border-0">Sign Up</button>
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

export default SignUp;
