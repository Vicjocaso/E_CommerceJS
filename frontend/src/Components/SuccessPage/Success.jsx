import React from "react";
import "./Success.css";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

// redux
import { useDispatch } from "react-redux";
import { resetCart } from "../../Redux/Actions/cartActions";

const Success = () => {
  const dispatch = useDispatch();
  const cartRest = () => dispatch(resetCart());
  return (
    // <div>
    //   <div style={{ width: "60rem", height: "30rem" }} className="card ">
    //     <Alert variant="second">
    //       <img style={{ width: "60px" }} src="./success.ico" alt="" />
    //       <Alert.Heading
    //         style={{ textAlign: "center", color: "#F7B600", padding: "3rem" }}
    //       >
    //         <h2>Pago exitoso</h2>
    //         <hr />
    //       </Alert.Heading>
    //       <div style={{ textAlign: "center", fontSize: "20px" }}>
    //         <p>Gracias por elegirnos, que tenga un buen dia</p>
    //         <p className="mb-0">
    //           Tu orden fue procesada, puede seguir comprando pulsando el boton
    //           "Continuar comprando"
    //         </p>
    //         <hr />
    //       </div>
    //     </Alert>
    //     <Link to="/">
    //       <Button
    //         onClick={cartRest}
    //         style={{
    //           background: "#1A1F71",
    //         }}
    //       >
    //         Volver a la tienda
    //       </Button>
    //     </Link>
    //   </div>
    //   <div
    //     style={{
    //       position: "fixed",
    //       left: "0",
    //       bottom: "0",
    //       width: "100%",
    //       textalign: "center",
    //     }}
    //   >
    //     <img style={{ width: "40rem" }} src="AnuncionCLink.jpg" alt="" />
    //   </div>
    // </div>
    <div>
      <div style={{ width: "60rem", height: "30rem" }} className="card ">
        <Alert variant="second">
          <div style={{ margin: "auto", width: "15%", padding: "10px" }}>
            <img src="./success.ico" alt="" />
          </div>
          <Alert.Heading style={{ textAlign: "center", color: "#F7B600" }}>
            <h2>Pago exitoso</h2>
            <hr />
          </Alert.Heading>
          <div style={{ textAlign: "center", fontSize: "20px" }}>
            <p>Gracias por elegirnos, que tenga un buen dia</p>
            <p className="mb-0">
              Tu orden fue procesada, puede seguir comprando pulsando el boton
              "Continuar comprando"
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
              onClick={cartRest}
              style={{
                background: "#1A1F71",
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
