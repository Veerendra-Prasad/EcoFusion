import React, { useState } from "react";
import "./Wallet.css";

function Wallet({ balance, handleBalance }) {
  const [vouchers, setVouchers] = useState([
    { id: "1997", value: "7.10$" },
    { id: "2000", value: "10.00$" },
  ]);
  const [voucherid, setVoucherId] = useState("");

  function handleInput(e) {
    setVoucherId(e.target.value);
  }

  function handleVouchers(value) {
    const newarray = vouchers.filter((item) => {
      return item.id === value && item;
    });
    if (newarray.length > 0) {
      handleBalance(newarray[0].value);
      console.log("Balance added");
    } else {
      console.log("Error");
    }
  }

  return (
    <div className="wallet-section">
      <h2 className="header">Your Wallet</h2>
      <div className="balance-section">
        <div className="balance">Current Balance : {balance}</div>
      </div>
      <div className="transaction-section">
        <div className="trans-section">
          <h2 className="header">Credit Transactions</h2>
          <h2>No Transactions Yet</h2>
        </div>
        <div className="trans-section">
          <h2 className="header">Debit Transactions</h2>
          <h2>No Transactions Yet</h2>
        </div>
      </div>
      <div className="footer-section">
        <input
          placeholder="Enter the Voucher ID"
          onChange={handleInput}
          value={voucherid}
        />
        <button onClick={() => handleVouchers(voucherid)}>Add Balance</button>
      </div>
    </div>
  );
}

export default Wallet;
