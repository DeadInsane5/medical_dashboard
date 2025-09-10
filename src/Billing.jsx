import React from "react";
import PaymentOps from "./components/PaymentOps";
import Checkout from "./components/Checkout";
import './styles/Billing.css';

function Billing() {
  return (
    <div>
      <h1>Billing</h1>
      <div id="billing-container">
        <div id="payment-options">
          <h2>Payment Options</h2>
          <div>
            <ul>
              <li><PaymentOps name="Credit Card" /></li>
              <li><PaymentOps name="Debit Card" /></li>
              <li><PaymentOps name="Net Banking" /></li>
              <li><PaymentOps name="UPI" /></li>
              <li><PaymentOps name="Wallets" /></li>
            </ul>
          </div>
        </div>
        <div id="checkout">
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default Billing;