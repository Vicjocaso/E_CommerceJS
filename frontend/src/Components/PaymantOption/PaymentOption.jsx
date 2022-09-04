import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";

const PaymentOption = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [soapForm, setsoapForm] = React.useState(false);
  const [acce, setAcee] = React.useState(false);

  function MyVerticallyCenteredModalRestApi(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ApiRest Con CyberSource
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ¿Qué es la API de Rest de CyberSource?
            <p></p>
            Una API de REST, o API de RESTful, es una interfaz de programación
            de aplicaciones (API o API web) que se ajusta a los límites de la
            arquitectura REST y permite la interacción con los servicios web de
            RESTful. El informático Roy Fielding es el creador de la
            transferencia de estado representacional (REST).
          </p>
        </Modal.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Modal.Footer>
          <Link to="/PaymentForm">
            <Button style={{ backgroundColor: "#1A1F71" }} size="lg">
              Continuar
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
  function MyVerticallyCenteredModalApiSop(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Soap Con CyberSource
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ¿Qué es Api Soap de CyberSource?
            <p></p> SOAP (anteriormente conocido como Simple Object Access
            Protocol) es un protocolo ligero para el intercambio de información
            en entornos descentralizados y distribuidos. Los mensajes SOAP son
            las transmisiones de información de remitentes a destinatarios.
          </p>
        </Modal.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Modal.Footer>
          <Link to="/formSoap" formSoap>
            <Button style={{ backgroundColor: "#1A1F71" }} size="lg">
              Continuar
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
  function MyVerticallyCenteredModalSecureAcceptance(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            secure acceptance Con CyberSource
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            ¿Qué es la API de secure acceptance de CyberSource?
            <p></p> Secure Acceptance protege su empresa de estos peligros
            mediante la transferencia de datos confidenciales de pago
            directamente de su cliente a nuestros servidores y centros de datos
            protegidos. Secure Acceptance también puede simplificar su
            cuestionario de auditoría de cumplimiento de PCI DSS a unas pocas
            casillas de verificación.
          </p>
        </Modal.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Modal.Footer>
          <Link to="/SecureAcceptance">
            <Button style={{ backgroundColor: "#1A1F71" }} size="lg">
              Continuar
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <Container>
      <div className="paymentOptinScreen">
        <Image src="./Step1.png"></Image>
        <Card style={{ width: "59rem", height: "30rem" }}>
          <Card.Title
            style={{
              textAlign: "center",
              fontSize: "40px",
              fontFamily: "time",
            }}
          >
            Selecciona de Metodo de integración
          </Card.Title>
          <Card.Body style={{ padding: "8rem" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ padding: "30px" }}>
                <Button
                  size="lg"
                  style={{ width: "15rem", backgroundColor: "#1A1F71" }}
                  onClick={() => setAcee(true)}
                >
                  Secure Acceptance
                </Button>
              </div>
              <div style={{ padding: "30px" }}>
                <Button
                  size="lg"
                  style={{ width: "15rem", backgroundColor: "#F7B600" }}
                  onClick={() => setModalShow(true)}
                >
                  Api Rest
                </Button>
              </div>
              <div style={{ padding: "30px" }}>
                <Button
                  size="lg"
                  style={{ width: "15rem", background: "black" }}
                  onClick={() => setsoapForm(true)}
                >
                  Api Soap
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>

        <MyVerticallyCenteredModalRestApi
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <MyVerticallyCenteredModalApiSop
          show={soapForm}
          onHide={() => setsoapForm(false)}
        />
        <MyVerticallyCenteredModalSecureAcceptance
          show={acce}
          onHide={() => setAcee(false)}
        />
      </div>
    </Container>
  );
};

export default PaymentOption;
