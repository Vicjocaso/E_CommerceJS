import React from "react";
import { Formik } from "formik";
import { useState, useRef, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./FormSoap.css";
import { useNavigate } from "react-router-dom";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

//Redux
import { soapForm } from "../../Redux/Actions/soapActions"; // redux action
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const FormSoap = () => {
  const [focus, setFocus] = useState("");

  useEffect(() => {
    ref.current.focus();
  }, []);

  const ref = useRef(null);
  const today = new Date();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  // CyberSoruce api Json authorization_with_capturesale Data
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
    dateMonth: "",
    dateYear: "",
    CVV: "",
    locality: "",
    administrativeArea: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
  });

  const [step, setStep] = useState("first");
  const [step2, setStep2] = useState("second");

  function nextStep() {
    setStep("second");
    setStep2("first");
  }

  // Previus form
  // const prevStep = () => {
  //   setStep("first");
  //   setStep2("second");
  // };

  const dummyData = () => {
    setData({
      name: "John",
      lastName: "Doe",
      email: "test@cybs.com",
      address: "Calle Jose Amado Soler",
      city: "DummyCity",
      cardNumber: "4111111111111111",
      dateMonth: `12/${today.getUTCFullYear() + 4}`,
      dateYear: today.getFullYear() + 3,
      CVV: "123",
      locality: "san francisco",
      administrativeArea: "CA",
      postalCode: "10205",
      country: "Republica Dominicana",
      phoneNumber: "809-112-3586",
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const SendApi = () => {
    console.log(data);
    soapForm(data);
  };

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  const [isLoading, setisLoading] = useState(false);
  let navigate = useNavigate();

  const validationPage = () => {
    let pathSuccess = `/success`;
    let pathFail = "/Fail";
    if (data.cardNumber !== "") {
      navigate(pathSuccess);
    } else {
      navigate(pathFail);
    }
  };

  useEffect(() => {
    if (isLoading) {
      SendApi();
      simulateNetworkRequest().then(() => {
        validationPage();
        setisLoading(false);
      });
    }
  }, [isLoading]);

  var handleSubmit = (e) => {
    e.preventDefault();
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
  };

  const handleClick = () => setisLoading(true);

  return (
    <Container>
      {step === "second" ? (
        <Image src="./Step3.png"></Image>
      ) : (
        <Image src="./Step2.png"></Image>
      )}
      <Row>
        <Col>
          <Tab.Container id="left-tabs-example" defaultActiveKey={step}>
            <Row>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey={step}>
                    <div>
                      <Formik
                        initialValues={{
                          name: "",
                          lastName: "",
                          email: "",
                          address: "",
                          city: "",
                          cardNumber: "",
                          dateMonth: "",
                          dateYear: "",
                          CVV: "",
                          locality: "",
                          administrativeArea: "",
                          postalCode: "",
                          country: "",
                          phoneNumber: "",
                        }}
                        onSubmit={() => {
                          console.log("enviado");
                        }}
                      >
                        {({ values, handleSubmit, handleChange }) => (
                          <form
                            onSubmit={handleSubmit}
                            className="wrapper"
                            id="form1"
                          >
                            <h4>informacion de facturacion</h4>
                            <div className="input_group">
                              <div className="input_box">
                                {/* Name group */}
                                <input
                                  type="text"
                                  placeholder="Nombre"
                                  id="name"
                                  name="name"
                                  className="name"
                                  required
                                  onChange={handleChange}
                                  value={values.name}
                                />
                                <i className="fa-solid fa-user icon"></i>
                              </div>
                              <div className="input_box">
                                {/* LastName group */}
                                <input
                                  type="text"
                                  placeholder="Apellido"
                                  className="name"
                                  name="lastName"
                                  required
                                  onChange={handleInputChange}
                                  value={data.lastName}
                                />
                                <i className="fa fa-user icon"></i>
                              </div>
                            </div>
                            <div className="input_group">
                              <div className="input_box">
                                {/* Email group */}
                                <input
                                  id="email"
                                  type="email"
                                  placeholder="JonhSmith@Visanet.com"
                                  name="email"
                                  className="name"
                                  required
                                  onChange={handleInputChange}
                                  value={data.email}
                                />
                                <i className="fa fa-envelope icon"></i>
                              </div>
                            </div>
                            <div className="input_group">
                              <div className="input_box">
                                {/* Address group */}
                                <input
                                  type="text"
                                  placeholder="Direccion"
                                  name="address"
                                  className="name"
                                  required
                                  onChange={handleInputChange}
                                  value={data.address}
                                />
                                <i
                                  className="fa fa-map-marker icon"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </div>
                            <div className="input_group">
                              <div className="input_box">
                                {/* City group */}
                                <input
                                  type="text"
                                  placeholder="Ciudad"
                                  name="city"
                                  className="name"
                                  required
                                  onChange={handleInputChange}
                                  value={data.city}
                                />
                                <i className="fa-solid fa-city icon"></i>
                              </div>
                            </div>
                            <div className="input_group">
                              <div className="input_box">
                                {/* PostalCode group */}
                                <input
                                  type="text"
                                  placeholder="Codigo postal"
                                  name="postalCode"
                                  className="name"
                                  required
                                  onChange={handleInputChange}
                                  value={data.postalCode}
                                />
                                <i className="fa fa-institution icon"></i>
                              </div>
                            </div>
                            <div className="input_group">
                              <div className="input_box">
                                {/* Contry group */}

                                <input
                                  type="text"
                                  placeholder="Pais"
                                  name="country"
                                  className="name"
                                  required
                                  onChange={handleInputChange}
                                  value={data.country}
                                />
                                <i className="fa-solid fa-earth-americas icon"></i>
                              </div>
                            </div>
                            <div className="input_group">
                              <div className="input_box">
                                {/* PhoneNumber group */}
                                <input
                                  type="text"
                                  placeholder="809-123-1234"
                                  name="phoneNumber"
                                  className="name"
                                  required
                                  onChange={handleInputChange}
                                  value={data.phoneNumber}
                                />
                                <i className="fa-solid fa-phone icon"></i>
                              </div>
                            </div>
                          </form>
                        )}
                      </Formik>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey={step2}>
                    <Container className="wrapper">
                      <div key="Payment">
                        <div className="App-payment">
                          <Cards
                            number={data.cardNumber}
                            name={data.name}
                            expiry={data.dateMonth}
                            cvc={data.cvc}
                            focused={focus}
                          />
                          <form className="form" onSubmit={handleSubmit}>
                            <div>
                              <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={data.name}
                                onChange={handleInputChange}
                                // onChange={(e) => setName(e.target.value)}
                                onFocus={(e) => setFocus(e.target.name)}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="tel"
                                maxLength="16"
                                name="cardNumber"
                                placeholder="Numeros de la tarjeta"
                                className="form-control"
                                value={data.cardNumber}
                                onChange={handleInputChange}
                                onFocus={(e) => setFocus(e.target.name)}
                                ref={ref}
                              />
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <input
                                  type="text"
                                  name="dateMonth"
                                  placeholder="MM/YY"
                                  className="form-control"
                                  maxLength="5"
                                  value={data.dateMonth}
                                  onChange={handleInputChange}
                                  onFocus={(e) => setFocus(e.target.name)}
                                />
                              </div>
                              <div className="col-6">
                                <input
                                  type="tel"
                                  name="cvc"
                                  placeholder="CVV"
                                  className="form-control"
                                  maxLength="4"
                                  value={data.CVV}
                                  onChange={handleInputChange}
                                  // onChange={(e) => setCvc(e.target.value)}
                                  onFocus={(e) => setFocus(e.target.name)}
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </Container>
                  </Tab.Pane>
                </Tab.Content>
                <Nav>
                  <Nav>
                    <Nav.Link eventKey={step}></Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link eventKey={step}></Nav.Link>
                  </Nav>
                </Nav>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
        <Col>
          <div className="right">
            <div className="form_right">
              <div className="form_info">
                <p>
                  SubTotal: ({getCartCount()}) : ${getCartSubTotal()} Dop
                </p>
                <p>${getCartSubTotal().toFixed(2)}</p>
              </div>

              <p style={{ fontWeight: "bold" }}>Nosotros aceptamos:</p>
              <div className="cardAcc">
                <i
                  className="fa-brands fa-cc-visa fa-2xl"
                  style={{ color: "#1A1F71" }}
                ></i>
                <img
                  src="./mastercard.png"
                  alt="Mastercard"
                  style={{ width: "4rem", padding: "1rem", margin: "1rem" }}
                />
                {/* <i
                  className="fa-brands fa-cc-mastercard fa-2xl"
                  style={{ color: "red" }}
                ></i> */}
                <i
                  className="fa-brands fa-cc-amex fa-2xl"
                  style={{ color: "blue" }}
                ></i>
              </div>
              <div>
                {step === "second" ? (
                  <Button
                    variant="dark"
                    disabled={isLoading}
                    onClick={!isLoading ? handleClick : null}
                    style={{ background: "black" }}
                  >
                    {isLoading ? "Loading…" : "Process to Checkout"}
                  </Button>
                ) : (
                  <Button
                    onClick={nextStep}
                    form="form1"
                    type="submit"
                    required
                    style={{ background: "black" }}
                  >
                    Continuar
                  </Button>
                )}
                {/* <Button variant="dark" type="submit" form="form1" required>
                  switch 1
                </Button>
                <Button
                  variant="dark"
                  onClick={prevStep}
                  type="submit"
                  form="form2"
                >
                  switch 2
                </Button> */}
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div>
        <Button
          style={{ background: "black" }}
          variant="dark"
          onClick={dummyData}
        >
          Completar
        </Button>
      </div>
    </Container>
  );
};

export default FormSoap;
