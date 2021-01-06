import React from "react";
import { Link } from "react-router-dom";
import { Tooltip, Button, message } from "antd";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
function NourishCard(props) {
  return (
    <div>
      {" "}
      <Container>
        <Row>
          <Col lg={6}></Col>
          <Col lg={6}>
            <h3 className="mt-4 mb-3">{props.title}</h3>
            <div className="step-img">
              {/* <img src={props.step} alt="goals" /> */}
            </div>
            <Col md={10}>
              <form>
                <div className="meal-days">
                  <ul>
                    <div className="goal-items">
                      <li>
                        <Row>
                          <div className="col-9">
                            <div>
                              <img src={props.img1} height="35px"/>
                            </div>
                            <p className="active">{props.subtitle1}</p>
                          </div>

                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">info</Button>
                            </Tooltip>
                          </div>
                        </Row>
                      </li>
                      <li>
                        {" "}
                        <Row>
                          <div className="col-9">
                            <div>
                              <img src={props.img2} />
                            </div>
                            <p className="active">{props.subtitle2}</p>
                          </div>

                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">info</Button>
                            </Tooltip>
                          </div>
                        </Row>
                      </li>
                      <li>
                        <Row>
                          <div className="col-9">
                            <div>
                              <img src={props.img3} />
                            </div>
                            <p className="active">{props.subtitle3}</p>
                          </div>

                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">info</Button>
                            </Tooltip>
                          </div>
                        </Row>
                      </li>
                      <li>
                        <Row>
                          <div className="col-9">
                            <div>
                              <img src={props.img4} className="nourish-img" />
                            </div>
                            <p className="active">{props.subtitle4}</p>
                          </div>

                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">info</Button>
                            </Tooltip>
                          </div>
                        </Row>
                      </li>
                      <li>
                        <Row>
                          <div className="col-9">
                            <div>
                              <img src={props.img5} />
                            </div>
                            <p className="active">{props.subtitle5}</p>
                          </div>

                          <div className="col-3 ">
                            <Tooltip
                              title="text for nourishment"
                              color="yellow"
                            >
                              <Button className="tooltip-button">info</Button>
                            </Tooltip>
                          </div>
                        </Row>
                      </li>

                      <li>
                        <Row>
                          <div className="col-9">
                            <div>
                              <img src={props.img6} />
                            </div>
                            <p className="active">{props.subtitle6}</p>
                          </div>

                          <div className="col-3  ">
                            <Tooltip title="prompt text" color="yellow">
                              <Button className="tooltip-button">info</Button>
                            </Tooltip>
                          </div>
                        </Row>
                      </li>
                    </div>
                  </ul>
                </div>
              </form>
            </Col>

            <Link to={props.link}>
              <Button>Next</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

NourishCard.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icoIcon: PropTypes.string.isRequired,
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
  img4: PropTypes.string,
  img5: PropTypes.string,
  img6: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  subtitle3: PropTypes.string,
  subtitle4: PropTypes.string,
  subtitle5: PropTypes.string,
  subtitle6: PropTypes.string,
  link: PropTypes.string,
};

export default NourishCard;
