import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import React from "react";

/*Components*/
import CartScreen from "./Components/CartScreen/CartScreen";
import Homescreen from "./Components/HomeScreen/HomeScreen";
import NavBar from "./Components/NavBar/NavBar";
import ProductScreen from "./Components/ProductScreen/ProductScreen";
import BackDrop from "./Components/BackDrop/BackDrop";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Success from "./Components/SuccessPage/Success";
import PaymentForm from "./Components/PaymentFrom/PaymentForm";
import FormSoap from "./Components/FormSoap/FormSoap";
import FailPage from "./Components/FailPage/FailPage";
import PaymentOption from "./Components/PaymantOption/PaymentOption";
import SecureAcceptance from "./Components/SecureAcceptance/SecureAcceptance";
import TestCo from "./Components/testCo/testCo";

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="app">
      <Router>
        <NavBar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
        <Routes>
          <Route exact path="/" element={<Homescreen />} />
          <Route exact path="/products/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
          <Route exact path="/PaymentOption" element={<PaymentOption />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/fail" element={<FailPage />} />
          <Route exact path="/PaymentForm" element={<PaymentForm />} />
          <Route exact path="/formSoap" element={<FormSoap />} />
          <Route exact path="/testCo" element={<TestCo />} />
          <Route
            exact
            path="/SecureAcceptance"
            element={<SecureAcceptance />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
