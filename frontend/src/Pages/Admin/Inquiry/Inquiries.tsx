import React from 'react'
import { useGetInquiriesQuery } from '../../../store/features/apiSlice'
const Inquiries = () => {
  const {data, status} = useGetInquiriesQuery();
  return (
    <div>
      <h1>Inquiries</h1>
      <div>
        {data?.map(item => (
          <>
            <p>{item.Listing.title}</p>
            <h2>{item.subject}</h2>
          </>
        ))}
      </div>
    </div>
  )
}

export default Inquiries
