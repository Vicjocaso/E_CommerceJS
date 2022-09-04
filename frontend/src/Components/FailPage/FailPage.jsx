import React from "react";
import "./FailPage.css";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Success = () => {
  return (
    <div>
      <div style={{ width: "60rem", height: "30rem" }} className="card ">
        <Alert variant="second">
          <div style={{ margin: "auto", width: "15%", padding: "10px" }}>
            <img src="./notification.ico" alt="" />
          </div>
          <Alert.Heading style={{ textAlign: "center", color: "red" }}>
            <h2>Pago Declinado</h2>
            <hr />
          </Alert.Heading>
          <div style={{ textAlign: "center", fontSize: "20px" }}>
            <p>Consulte con su banco</p>

            <p className="mb-0">
              Si deseas continuar comprando pulse el botón "Continuar comprando"
            </p>
            <hr />
          </div>
        </Alert>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <Link to="/">
            <Button
              style={{
                background: "#F7B600",
              }}
            >
              Volver a la tienda
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
