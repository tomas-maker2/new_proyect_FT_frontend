import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Tearms And Conditions"} />
      <BreadCrum title="Tearms And Conditions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default TermAndConditions;
