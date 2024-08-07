import { useParams } from "react-router-dom";
import {
  useGetListingByIdQuery,
  useSubmitInquiryMutation,
} from "../../store/features/apiSlice";
import "./SingleListing.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/cart";
import { RootState } from "../../store";
import ImageSlideShow from "../../components/ImageSlideShow/ImageSlideShow";

const SingleListing = () => {
  const params = useParams();
  const { status, data } = useGetListingByIdQuery(parseInt(params.id || "0"));
  const [submitInquiry, { isSuccess, isError }] = useSubmitInquiryMutation();
  const cartState = useSelector((state: RootState) => state.cart.cart);

  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  let content;

  async function onRemoveFromCartClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    console.log(data)
    await dispatch(removeItem(data));
    alert("Item removed from cart");
  }

  async function onAddToCartClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    await dispatch(addItem(data));
    alert("Item added to cart");
  }

  async function onInquirySubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await submitInquiry({
      email,
      phoneNumber,
      subject,
      message,
      listingId: parseInt(params?.id || "0"),
    });
  }

  useEffect(() => {
    if (isSuccess) {
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
      alert("Inquiry Submitted! Expect a response within the next few days.");
    } else if (isError) {
      alert(
        "Please try resubmitting your message. If this continues, contact directly at our email."
      );
    }
    return () => {
      setEmail("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
    };
  }, [isSuccess, isError]);

  if (status === "fulfilled") {
    content = (
      <>
        <li className="information-item">
          <h3>Body Tone: {data?.BodyTone?.name}</h3>
        </li>
        <li className="information-item">
          <h3>Brightness: {data?.Brightness?.name}</h3>
        </li>
        <li className="information-item">
          <h3>Cut: {data?.Cut?.name}</h3>
        </li>
        <li className="information-item">
          <h3>Dome: {data?.Dome?.name}</h3>
        </li>
        <li className="information-item">
          <h3>Opal Type: {data?.OpalType?.name}</h3>
        </li>
        <li className="information-item">
          <h3>Origin: {data?.Origin?.name}</h3>
        </li>
      </>
    );
  } else if (status === "pending") {
    content = <h1>Loading</h1>;
  } else if (status === "rejected") {
    content = (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <div className="listing-container">
      <div className="showcase">
        <div className="basic-info">
          <ImageSlideShow images={[
            "https://i.ibb.co/yf6gYkm/F583-F9-CD-C3-B7-4803-A353-319-A3-F1-FB959-1-201-a.jpg",
            "https://i.ibb.co/Y0fxXvb/9-B5-A39-F3-43-F3-48-B9-8-F7-F-E312-B6403-EF1-1-201-a.jpg",
            "https://i.ibb.co/Nx7YMVB/5-A5-ED896-5317-46-D2-B6-B1-9-ECBE4-CE9535-1-201-a.jpg",
          ]}
          imageHeight={250}
          imageWidth={250}/>
          <div className="showcase-information">
            <h2 className="title">{data?.title}</h2>
            <p className="description">{data?.description}</p>
            <span>
              {data?.length} x {data?.width} x {data?.height}
            </span>
          </div>
        </div>
        <div className="purchase-info">
          <h2 className="price">${data?.price}</h2>
          <button>Buy Now</button>
          {!cartState.some((item) => item?.id === data?.id) ? (
            <button onClick={onAddToCartClick}>Add to Cart</button>
          ) : (
            <button onClick={onRemoveFromCartClick}>Remove from Cart</button>
          )}
          <button>Inquire</button>
        </div>
      </div>
      <div className="information">
        <h3>Information</h3>
        <ul className="information-list">{content}</ul>
      </div>
      <div>
        <form onSubmit={onInquirySubmit}>
          <h1>Inquire about this listing</h1>
          <div>
            <label>email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label>Message</label>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <input type="submit" value="Submit Inquiry" />
        </form>
      </div>
    </div>
  );
};

export default SingleListing;
