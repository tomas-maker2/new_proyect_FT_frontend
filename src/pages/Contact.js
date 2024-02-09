import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { HiHomeModern } from "react-icons/hi2";
import { IoIosCall } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrum title="Contact Us" />

      <Container class1="contact-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <iframe
                title="hola"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13141.761744621455!2d-58.451593100000004!3d-34.5677206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d3a0a211b3%3A0xedd3483149685e17!2sMuseo%20de%20Arte%20Espa%C3%B1ol%20Enrique%20Larreta!5e0!3m2!1ses-419!2sar!4v1707318296671!5m2!1ses-419!2sar"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact </h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Number"
                      />
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
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in Touch with Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li>
                        <HiHomeModern />
                      </li>
                      <li>
                        <IoIosCall />
                      </li>
                      <li>
                        <IoMailOpenOutline />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Contact;
