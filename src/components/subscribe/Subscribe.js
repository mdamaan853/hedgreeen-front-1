import React from "react";
// import subscribebanner from "../../common/assets/subscribebanner.jpg";
import { Link } from "react-router-dom";
import Carousel from "../../Myntra/Carousel";
import dgreenicon from "../../common/assets/dgreenicon.png";
import dgreenicon2 from "../../common/assets/dgreenicon2.png";
import dgreenicon3 from "../../common/assets/dgreenicon3.png";
import { FiArrowRightCircle } from "react-icons/fi";
import { Button } from "react-bootstrap";

function Subscribe() {
  return (
    <div>
      <section className="main">
        <div className="subscribe-img">
          <Carousel />
        </div>

        <div className="subscribe-section">
          <div className="container text-center">
            <h3 className="mb-5 mt-4 p-2">Why Heydgreen?</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mt-2">
                    {" "}
                    <img classNameName="dgreenicon" src={dgreenicon} />
                  </div>
                  <h5 className="mt-3">Sell digital content</h5>{" "}
                  <small>
                    Start selling eBooks, video files, audio files, PDFs,
                    checklinst text, or just about anything.
                  </small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mt-2">
                    {" "}
                    <img classNameName="dgreenicon" src={dgreenicon2} />
                  </div>
                  <h5 className="mt-3">Beautiful landing pages</h5>{" "}
                  <small>
                    Sales pages that will match your brand or offer upsells to
                    your supporters.
                  </small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mt-2">
                    {" "}
                    <img classNameName="dgreenicon" src={dgreenicon3} />
                  </div>
                  <h5 className="mt-3">Connect with supporters</h5>{" "}
                  <small>
                    Using sales pages you can connect with your customers using
                    our chatbot system.
                  </small>
                </div>
              </div>
            </div>
            <div className=" mt-5">
              {" "}
              <Link to={"/getstarted/"}>
                <Button variant="outline-success" className="button">
                  {" "}
                  Get Started <FiArrowRightCircle />
              </Button>{" "}
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscribe;
