import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getPurchase, startPurchase, updatePurchase } from "../../store/cart";
import { PurchaseInfo } from "../../../types/Purchases";

const Checkout: React.FC<{ purchaseAmount: number }> = ({ purchaseAmount }) => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const clientSecret = useSelector(
    (state: RootState) => state.cart.clientSecret
  );
  const status = useSelector((state: RootState) => state.cart.status);
  const amount = useSelector((state: RootState) => state.cart.amount);

  const dispatch = useDispatch<AppDispatch>();

  //Upon initialization, the total amount for the cart should be known
  //   Take that value and send it to Stripe using the redux thunk, and from there
  //   set the client secret in the options of the Elements provider
  const publishableKey: string =
    "pk_test_51PLDstP6YFbHfJ6EmtPaRqVgEGcNRtx7fnYjiDUQSuTOGplgoM5H11LtpXlE1XbiSqH0O6E33i7xx8f1qJnswx7Y00S69kQ4Eb";
  const stripePromise = loadStripe(publishableKey);
  const options = {
    clientSecret,
  };

  const purchase = async () => {
    //In here, use the dispatch function to create a payment intent with the
    //subtotal. Be sure to include the paymentintentId if there was already a
    // client secret in the store (aka the userInfo variable)
    const handlePurchase: PurchaseInfo = {
      amount: purchaseAmount,
      currency: "USD",
    };
    // If the secret already exists, strip out the paymentid and update the
    // payment amount

    if (!clientSecret) {
      await dispatch(startPurchase(handlePurchase));
    } else {
      //  get the payment intent from stripe
      await dispatch(
        getPurchase({
          PaymentintentId: clientSecret.split("_secret_")[0],
        })
      );
      //  check to see if the amount has changed
      if (purchaseAmount !== amount)
        //  if it has changed, update the payment intent
        await dispatch(
          updatePurchase({
            amount: purchaseAmount,
            currency: "USD",
            id: clientSecret,
          })
        );
    }
  };

  useEffect(() => {
    () => {};
  });

  return (
    <Elements options={options} stripe={stripePromise}>
      <PaymentElement />
    </Elements>
  );
};

export default Checkout;
