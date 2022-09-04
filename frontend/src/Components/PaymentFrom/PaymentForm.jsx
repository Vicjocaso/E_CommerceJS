import React from "react";
import { useState, useRef, useEffect } from "react";
import Cards from "react-credit-cards";
import "./PaymentForm.css";
import { useNavigate } from "react-router-dom";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

//Redux
import { formPost } from "../../Redux/Actions/formActions"; // redux action
import { getProducts as listProducts } from "../../Redux/Actions/productActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const PaymentForm = () => {
  const [focus, setFocus] = useState("");
  const [errors, setErrors] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const ref = useRef(null);
  const today = new Date(); // date
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  // const getCartCount = () => {
  //   return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  // };

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
    number: "",
    expiry: "",
    dateYear: "",
    cvc: "",
    locality: "",
    administrativeArea: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
  });

  const [step, setStep] = useState("first");
  const [step2, setStep2] = useState("second");

  // netx page
  function nextStep() {
    setStep("second");
    setStep2("first");
  }

  // previus page
  const prevStep = () => {
    setStep("first");
    setStep2("second");
  };

  //Dummy Json
  const dummyData = () => {
    setData({
      name: "John",
      lastName: "Doe",
      email: "test@cybs.com",
      address: "Calle Jose Amado Soler",
      city: "DummyCity",
      number: "4111111111111111",
      expiry: `12/${today.getUTCFullYear() + 4}`,
      dateYear: today.getFullYear() + 3,
      cvc: "123",
      locality: "san francisco",
      administrativeArea: "CA",
      postalCode: "10205",
      country: "Republica Dominicana",
      phoneNumber: "809-112-3586",
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleInputChange(e);
    setErrors(validationsForm(data));
  };

  const validationsForm = (errors) => {
    let err = {};
    let regexName = /^[A-Za-z\s]+$/;
    let regexEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!errors.name.trim()) {
      err.name = "El campo 'Nombre' debe ser completado";
    } else if (!regexName.test(errors.name.trim())) {
      err.name = "Este campo es obligatorio";
    }

    if (!errors.lastName.trim()) {
      err.lastName = "El campo 'Apellido' debe ser completado";
    }

    if (!errors.email.trim()) {
      err.email = "El campo 'Correo electronico' debe ser completado";
    } else if (!regexEmail.test(errors.email.trim())) {
      err.name =
        "Este campo Email debe ser llenado correctamente '@ejemplo.com' ";
    }

    if (!errors.address.trim()) {
      err.address = "El campo 'direccion' debe ser completado";
    }

    if (!errors.city.trim()) {
      err.city = "El campo 'Ciudad' debe ser completado";
    }

    if (!errors.postalCode.trim()) {
      err.postalCode = "El campo 'Codigo postal' debe ser completado";
    }

    if (!errors.country.trim()) {
      err.country = "El campo 'Pais' debe ser completado";
    }

    if (!errors.phoneNumber.trim()) {
      err.phoneNumber = "El campo 'Numero telefonico' debe ser completado";
    }

    return err;
  };

  const SendApi = async () => {
    const response = await formPost(data);
    validationPage(response && response.status);
  };

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  const [isLoading, setisLoading] = useState(false);
  let navigate = useNavigate();

  const validationPage = (statuscode) => {
    let pathSuccess = "/success";
    let pathFail = "/Fail";
    if (statuscode === 200) {
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

  const handleClick = () => setisLoading(true);

  // var handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = [...e.target.elements]
  //     .filter((d) => d.name)
  //     .reduce((acc, d) => {
  //       acc[d.name] = d.value;
  //       return acc;
  //     }, {});

  //   this.setState({ formData });
  //   this.form.reset();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validationsForm(data));
  };

  function MyVerticallyCenteredModalRestApi(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Campos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <h5>Debe llenar todos los campos antes de continuar</h5>
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Row sm={2}>
            <Col style={{ color: "red" }}> {errors.name}</Col>
            <Col style={{ color: "red" }}> {errors.lastName}</Col>
            <Col style={{ color: "red" }}> {errors.email}</Col>
            <Col style={{ color: "red" }}> {errors.address}</Col>
            <Col style={{ color: "red" }}> {errors.city}</Col>
            <Col style={{ color: "red" }}> {errors.postalCode}</Col>
            <Col style={{ color: "red" }}> {errors.country}</Col>
            <Col style={{ color: "red" }}> {errors.phoneNumber}</Col>
          </Row>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {step === "second" ? (
          <Image src="./Step3.png"></Image>
        ) : (
          <Image src="./Step2.png"></Image>
        )}
        <Row>
          <Col>
            <Tab.Container id="left-tabs-example" defaultActiveKey={step}>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey={step}>
                    <div>
                      <form
                        className="wrapper"
                        id="formData"
                        onSubmit={handleSubmit}
                      >
                        <h4>informacion de facturacion</h4>
                        <div className="input_group">
                          <div className="input_box">
                            {/* Name group */}
                            {/* <p style={{ color: "red" }}>{errors.name}</p> */}
                            <input
                              onBlur={handleBlur}
                              type="text"
                              placeholder="Nombre"
                              name="name"
                              className="name"
                              required
                              onChange={handleInputChange}
                              value={data.name}
                            />
                            <i className="fa-solid fa-user icon"></i>
                            {/* <p style={{ color: "red", fontSize: "10px" }}>
                              {errors.name}
                            </p> */}
                          </div>
                          <div className="input_box">
                            {/* LastName group */}
                            <input
                              type="text"
                              placeholder="Apellido"
                              className="name"
                              name="lastName"
                              required
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              value={data.lastName}
                            />
                            <i className="fa fa-user icon"></i>
                            {/* <p style={{ color: "red", fontSize: "10px" }}>
                              {errors.lastName}
                            </p> */}
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
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              value={data.email}
                            />
                            <i className="fa fa-envelope icon"></i>
                            {/* <p style={{ color: "red", fontSize: "10px" }}>
                              {errors.email}
                            </p> */}
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
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              value={data.address}
                            />
                            <i
                              className="fa fa-map-marker icon"
                              aria-hidden="true"
                            ></i>
                            {/* <p style={{ color: "red", fontSize: "10px" }}>
                              {errors.address}
                            </p> */}
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
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              value={data.city}
                            />
                            <i className="fa-solid fa-city icon"></i>
                            {/* <p style={{ color: "red", fontSize: "10px" }}>
                              {errors.city}
                            </p> */}
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
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              value={data.postalCode}
                            />
                            <i className="fa fa-institution icon"></i>
                            {/* <p style={{ color: "red", fontSize: "10px" }}>
                              {errors.postalCode}
                            </p> */}
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
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              value={data.country}
                            />
                            <i className="fa-solid fa-earth-americas icon"></i>
                            {/* <p style={{ color: "red", fontSize: "10px" }}>
                              {errors.country}
                            </p> */}
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
                              onBlur={handleBlur}
                              onChange={handleInputChange}
                              value={data.phoneNumber}
                            />
                            <i className="fa-solid fa-phone icon"></i>
                            {/* <p style={{ color: "red", fontSize: "10px" }}>
                              {errors.phoneNumber}
                            </p> */}
                          </div>
                        </div>
                      </form>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey={step2}>
                    <Container className="wrapper">
                      <div key="Payment">
                        <div className="App-payment">
                          <Cards
                            number={data.number}
                            name={data.name}
                            expiry={data.expiry}
                            cvc={data.cvc}
                            focused={focus}
                          />
                          <form
                            className="form"
                            id="formCard"
                            onSubmit={handleSubmit}
                          >
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
                                name="number"
                                placeholder="Numeros de la tarjeta"
                                className="form-control"
                                value={data.number}
                                onChange={handleInputChange}
                                onFocus={(e) => setFocus(e.target.name)}
                                ref={ref}
                              />
                            </div>
                            <div className="row">
                              <div className="col-6">
                                <input
                                  type="text"
                                  name="expiry"
                                  placeholder="MM/YY"
                                  className="form-control"
                                  maxLength="5"
                                  value={data.expiry}
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
                                  value={data.cvc}
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
            </Tab.Container>
          </Col>
          <Col>
            <div className="right">
              <div className="form_right">
                <div className="form_info">
                  <Container>
                    <div>
                      <h5>Resumen de la orden:</h5>
                    </div>
                    <Row sm={2}>
                      <Col style={{ fontWeight: "bold" }}>
                        <p className="col-6">SubTotal:</p>
                        <p className="col-6">Delivery:</p>
                        <p className="col-6">TOTAL:</p>
                      </Col>
                      <Col>
                        <p className="col-6">DOP${getCartSubTotal()}</p>
                        <p className="col-6">DOP$00.00</p>
                        <p className="col-6">DOP${getCartSubTotal()}</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <p style={{ fontWeight: "bold" }}>Nosotros aceptamos:</p>
                <div className="cardAcc">
                  {/* <i
                    className="fa-brands fa-cc-visa fa-2xl"
                    style={{ color: "#1A1F71" }}
                  ></i> */}
                  <img
                    src="./mastercard.png"
                    alt="Mastercard"
                    style={{ width: "65px", padding: "10px" }}
                  />
                  <img
                    src="./visa.png"
                    alt="Visa"
                    style={{ width: "65px", padding: "10px" }}
                  />
                  <img
                    src="./amex.png"
                    alt="Visa"
                    style={{ width: "65px", padding: "10px" }}
                  />
                </div>

                {/* {(() => {
                  if (
                    data.name === "" ||
                    data.lastName === "" ||
                    data.email === "" ||
                    data.address === "" ||
                    data.city === "" ||
                    data.postalCode === "" ||
                    data.country === "" ||
                    data.phoneNumber === ""
                  ) {
                    return (
                      <Button
                        // form="formData"
                        // type="submit"
                        onClick={nextStep}
                        style={{ background: "#1A1F71" }}
                        variant="dark"
                      >
                        continuar
                      </Button>
                    );
                  } else if (
                    data.name ||
                    data.lastName ||
                    data.email ||
                    data.address ||
                    data.city ||
                    data.postalCode ||
                    data.country ||
                    data.phoneNumber
                  ) {
                    return (
                      <Button
                        // form="formCard"
                        // type="submit"
                        style={{ background: "#1A1F71" }}
                        variant="dark"
                        disabled={isLoading}
                        onClick={!isLoading ? handleClick : null}
                      >
                        casi no
                      </Button>
                    );
                  } else {
                    return (
                      <Button
                        // form="formCard"
                        // type="submit"
                        style={{ background: "#1A1F71" }}
                        variant="dark"
                        disabled={isLoading}
                        onClick={!isLoading ? handleClick : null}
                      >
                        {isLoading ? "Loading…" : "Procesar Pago"}
                      </Button>
                    );
                  }
                })()} */}
                <div>
                  {step === "second" ? (
                    <Button
                      // form="formCard"
                      // type="submit"
                      style={{ background: "#1A1F71" }}
                      variant="dark"
                      disabled={isLoading}
                      onClick={
                        data.name === "" ||
                        data.number === "" ||
                        data.cvc === "" ||
                        data.expiry === ""
                          ? () => setModalShow(true)
                          : !isLoading
                          ? handleClick
                          : null
                      }
                    >
                      {isLoading ? "Loading…" : "Procesar Pago"}
                    </Button>
                  ) : (
                    // <Button
                    //   // form="formData"
                    //   // type="submit"
                    //   onClick={
                    //     data.name === "" ||
                    //     data.lastName === "" ||
                    //     data.email === "" ||
                    //     data.address === "" ||
                    //     data.city === "" ||
                    //     data.postalCode === "" ||
                    //     data.country === "" ||
                    //     data.phoneNumber === ""
                    //       ? () => setModalShow(true)
                    //       : nextStep
                    //   }
                    //   style={{ background: "#1A1F71" }}
                    //   variant="dark"
                    // >
                    //   Continuar
                    // </Button>
                    <Button
                      // form="formData"
                      // type="submit"
                      onClick={
                        errors.name ||
                        errors.lastName ||
                        errors.email ||
                        errors.address ||
                        errors.city ||
                        errors.postalCode ||
                        errors.country ||
                        errors.phoneNumber
                          ? () => setModalShow(true)
                          : nextStep
                      }
                      style={{ background: "#1A1F71" }}
                      variant="dark"
                    >
                      Continuar
                    </Button>
                  )}
                  {step === "second" ? (
                    <Button
                      // form="formData"
                      // type="submit"
                      onClick={prevStep}
                      style={{ background: "#1A1F71" }}
                      variant="dark"
                    >
                      Atras
                    </Button>
                  ) : (
                    <p></p>
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
            style={{ background: "#1A1F71" }}
            variant="dark"
            onClick={dummyData}
          >
            Completar
          </Button>
        </div>
      </form>
      <MyVerticallyCenteredModalRestApi
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default PaymentForm;
