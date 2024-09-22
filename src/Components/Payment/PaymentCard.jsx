import React, { useState } from "react";
import Button from "../CommonUtility/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function PaymentCard({ item }) {
  const [amount, setAmount] = useState(150);
  const [data, setData] = useState([]);
  const [key, setKey] = useState();

  const handleOrder = async () => {
    try {
      const body = { amount };
      // Fetch the order data
      const orderResponse = await fetch("http://localhost:4000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const orderData = await orderResponse.json();
      setData(orderData);

      // Fetch the key data
      const keyResponse = await fetch("http://localhost:4000/key", {
        method: "GET",
      });
      const keyData = await keyResponse.json();
      setKey(keyData);

      // Razorpay options configuration
      const options = {
        key: key?.result,
        amount: amount * 100, // Amount is in currency subunits
        currency: "INR",
        name: "SnippetHub",
        description: "Pro Plan",
        image: "https://example.com/your_logo",
        order_id: data?.order?.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        prefill: {
          name: "Ayush Dimri",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // Open Razorpay payment window
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-10 flex justify-center">
      <div className="bg-accent shadow-lg rounded-lg p-6 text-textColor flex flex-col space-y-6 items-center w-96">
        <h1 className="font-bold text-2xl">Pro Plan</h1>
        <h3 className="text-xl">₹ {amount}/month</h3>

        <ul className="flex flex-col space-y-4 text-left w-2/3 ">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Unlock Code Snippet
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Free Guidance
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" /> Access to All Features
          </li>
        </ul>

        <Button className="mt-6" text="Buy Plan" onClick={handleOrder} />
      </div>
    </div>
  );
}

export default PaymentCard;
