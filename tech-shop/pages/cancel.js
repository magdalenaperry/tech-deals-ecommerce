import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
// import { useRouter } from "next/router";

import { useStateContext } from "../context/StateContext";
import { runConfetti } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    // setCartItems([]);
    // setTotalPrice(0);
    // setTotalQuantities(0);
  }, []);

  return (
    <>
      <div className="success-wrapper">
        <div className="success">
          <h2>Your order was successfully cancelled.</h2>
          <p className="description">
            If you have any questions, please email
            <a className="email" href="mailto:order@example.com">
              order@example.com
            </a>
          </p>
          <Link href="/">
            <button type="button" width="300px" className="btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Success;
