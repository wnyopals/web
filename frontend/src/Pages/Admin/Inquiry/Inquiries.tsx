import React, { useEffect } from "react";
import { useGetInquiriesQuery } from "../../../store/features/apiSlice";
const Inquiries = () => {
  const { data, isLoading, isSuccess, isError } = useGetInquiriesQuery();
  let inquiries: React.ReactNode;
  if (isLoading) {
    inquiries = <h1>loading...</h1>;
  } else if (isSuccess) {
    inquiries = data?.map((item) => (
      <div>
        <h1>{item.Listing.title}</h1>
        <h2>{item.subject}</h2>
        <h3>{item.email}</h3>
        <p>{item.subject}</p>
      </div>
    ));
  } else if (isError) {
    inquiries = <><h2>Error</h2><p>error message</p></>
  }
  useEffect(() => {
    console.log(inquiries);
    console.log(data)
  });
  return (
    <div>
      <h1>Inquiries</h1>
      <div>
        {inquiries}
      </div>
    </div>
  );
};

export default Inquiries;
