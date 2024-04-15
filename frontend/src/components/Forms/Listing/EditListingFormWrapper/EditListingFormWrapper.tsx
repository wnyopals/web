import React, {useEffect} from "react";

import { useNavigate, useParams } from "react-router-dom";
import {
  useGetListingByIdQuery,
  useUpdateListingMutation,
} from "../../../../store/features/apiSlice";
import ListingForm from '../ListingForm';

import { listingRequest } from "../../../../../types/Listing";

const EditListingFormWrapper:React.FC = () => {
  const { id } = useParams();
  const {
    isError: getListingError,
    isLoading: getListingLoading,
    isSuccess: getListingSuccess,
    data: getListingData
  } = useGetListingByIdQuery(parseInt(id || "0"));
  const [updateListing, { isError, isLoading, isSuccess, data }] =
    useUpdateListingMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(`/listing/${data?.id}`);
    }
  }, [isSuccess]);

  async function updateForm(newListing: listingRequest) {
    newListing.id = parseInt(id || "0")
    await updateListing(newListing);
  }

  return (
    <>
        {getListingLoading && (
            <div>
                <h1>Loading listing</h1>
                <p>please wait...</p>
            </div>
        )}
        {getListingSuccess && (
            <div>
                {isError && <h1>Error</h1>}
                {isLoading && <h1>Loading</h1>}
                {isSuccess && <h1>Added</h1>}
                <ListingForm finalSubmit={updateForm}listing={getListingData} />
          </div>
        )}
        {getListingError && (
            <div>
                <h1>An error has occurred</h1>
                <p>Refresh the page. If that doesn't work check the logs!</p>
            </div>
        )}
    </>
  );
};

export default EditListingFormWrapper;
