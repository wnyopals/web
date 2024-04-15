import React, { useEffect } from 'react'

import { useAddListingMutation } from '../../../../store/features/apiSlice';
// import { useNavigate } from 'react-router-dom';
import { listingRequest } from '../../../../../types/Listing';
import ListingForm from '../ListingForm';
import { useNavigate } from 'react-router-dom';

const AddListingFormWrapper: React.FC = () => {
  
    // const navigate = useNavigate()
    const [addListing, {isError, isLoading, isSuccess, data}] = useAddListingMutation();
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            navigate(`/listing/${data?.id}`)
        }
    }, [isSuccess])

    async function addForm(newListing: listingRequest) {
        await addListing(newListing)
        if (isSuccess) {
            console.log("Should navigate here")   
        }
    }
  
    return (
    <div>
        {isError && <h1>Error</h1>}
        {isLoading && <h1>Loading</h1>}
        {isSuccess && <h1>Added</h1>}
        <ListingForm finalSubmit={addForm}/>
    </div>
  )
}

export default AddListingFormWrapper
