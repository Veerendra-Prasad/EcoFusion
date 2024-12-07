import React, { useState } from "react";

function Wallet({ balance, handleBalance }) {
  const [vouchers, setVouchers] = useState([
    { id: "1997", value: "7.00$" },
    { id: "2000", value: "0.99$" },
  ]);

  const [showvoucher, setShowVoucher] = useState(false);
  const [voucherid, setVoucherId] = useState("");

  function handleInput(e) {
    setVoucherId(e.target.value)
  }

  function handleVouchers(value) {
    const newarray = vouchers.map((item) => {
        return item.id === value && item
    })
    if(newarray){
        handleBalance(newarray[0].value)
        setShowVoucher(false)
    }
    else{
        console.log("Error");
    }
  }

  return (
    <div>
      Wallet
      {balance}
      <input
        type="Number"
        placeholder="Enter the Voucher ID"
        onChange={handleInput}
        value={voucherid}
      />
      <button onClick={() => handleVouchers(voucherid)}>Add Balance</button>
    </div>
  );
}

export default Wallet;
