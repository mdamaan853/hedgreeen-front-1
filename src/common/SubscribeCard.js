import React from "react";
import { Link } from "react-router-dom";
import { Steps, Button, message } from "antd";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
function SubscribeCard(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}></Col>
          <Col lg={6} className="mt-4">
            <h3>{props.title}</h3>
            <div className="step-img">
              <img src={props.step} alt="goals" />
            </div>
            <Col md={10}>
              <form>
                <div className="meal-days">
                  <ul>
                    <div className="goal-items">
                      <li>
                        <div>
                          <img src={props.img1} />
                          <p className="active">{props.subtitle1}</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src={props.img2} />
                          <p className="active">{props.subtitle2}</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src={props.img3} />
                          <p className="active">{props.subtitle3}</p>
                        </div>
                      </li>
                      <li>
                        <div>
                          <img src={props.img4} />
                          <p className="active">{props.subtitle4}</p>
                        </div>
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

SubscribeCard.propTypes = {
  step: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icoIcon: PropTypes.string.isRequired,
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
  img4: PropTypes.string,
  subtitle1: PropTypes.string,
  subtitle2: PropTypes.string,
  subtitle3: PropTypes.string,
  subtitle4: PropTypes.string,
  link: PropTypes.string,
};

export default SubscribeCard;
