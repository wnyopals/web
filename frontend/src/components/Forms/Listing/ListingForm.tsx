import React, { useState } from "react";
import {
  useGetBodyTonesQuery,
  useGetBrightnessesQuery,
  useGetColorsQuery,
  useGetCutsQuery,
  useGetDomesQuery,
  useGetListingStatusesQuery,
  useGetOpalTypesQuery,
  useGetOriginsQuery,
  useGetPatternsQuery,
} from "../../../store/features/apiSlice";
import {
  listing,
  listingRequest,
} from "../../../../types/Listing";
import AttributeSingleSelect from "../../selects/AttributeSingleSelect/AttributeSingleSelect";
import AttributeMultiSelect from "../../selects/AttributeMultiSelect/AttributeMultiSelect";
// import { Attribute } from "../../../../types/Attributes";

const ListingForm: React.FC<{
  listing?: listing;
  finalSubmit: (data: listingRequest ) => void;
}> = ({ listing, finalSubmit }) => {
  //data
  const statusData = useGetListingStatusesQuery();
  const opalTypeData = useGetOpalTypesQuery();
  const cutsData = useGetCutsQuery();
  const domeData = useGetDomesQuery();
  const originsData = useGetOriginsQuery();
  const bodyTonesData = useGetBodyTonesQuery();
  const colorsData = useGetColorsQuery();
  const patternsData = useGetPatternsQuery();
  const brightnessData = useGetBrightnessesQuery();

  //modify
  const [title, setTitle] = useState(listing?.title ?? "");
  const [description, setDescription] = useState(listing?.description ?? "");
  const [price, setPrice] = useState(listing?.price ?? 0.0);
  const [length, setLength] = useState(listing?.length ?? 0.0);
  const [width, setWidth] = useState(listing?.width ?? 0.0);
  const [height, setHeight] = useState(listing?.height ?? 0.0);
  const [quantity, setQuantity] = useState(listing?.quantity ?? 0);
  const [weight, setWeight] = useState(0.0);

  const [status, setStatus] = useState<number>(listing?.status ?? 1);
  const [opalType, setOpalType] = useState<number>(listing?.OpalType?.id ?? 1);
  const [cut, setCut] = useState<number>(listing?.Cut?.id ?? 1);
  const [dome, setDome] = useState<number>(listing?.Dome?.id ?? 1);
  const [origin, setOrigin] = useState<number>(listing?.Origin?.id ?? 1);
  const [bodyTone, setBodyTone] = useState<number>(listing?.BodyTone?.id ?? 1);
  const [brightness, setBrightness] = useState<number>(
    listing?.Brightness?.id ?? 1
  );
  const [selectedColor, setSelectedColor] = useState<number>(1);
  const [selectedPattern, setSelectedPattern] = useState<number>(1);
  // add all colors here
  const [allColors, setAllColors] = useState<number[]>([]);
  // add all patterns here
  const [allPatterns, setAllPatterns] = useState<number[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newListing: listingRequest = {
      title,
      description,
      price,
      length,
      width,
      height,
      quantity,
      status,
      type: opalType,
      cut,
      dome,
      origin,
      bodyTone,
      weight,
      brightness,
      colors: allColors,
      patterns: allPatterns,
    };
    await finalSubmit(newListing);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <br />
        <div>
          <label>Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        </div>
        <br />
        <div>
          <label>Weight</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <br />
        <div>
          <label>Size (LxWxD)</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
          />
          <span>x</span>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(parseFloat(e.target.value))}
          />
          <span>x</span>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
        </div>
        <br />
        <div>
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseFloat(e.target.value))}
          />
        </div>
        <br />
        <AttributeSingleSelect
          label="Status"
          attributes={statusData.data ?? []}
          currentAttributeValue={status}
          setCurrentAttributeValue={setStatus}
        />
        <br />
        <AttributeSingleSelect
          label="Opal Type"
          attributes={opalTypeData.data ?? []}
          currentAttributeValue={opalType}
          setCurrentAttributeValue={setOpalType}
        />
        <br />
        <AttributeSingleSelect
          label="Cuts"
          attributes={cutsData.data ?? []}
          currentAttributeValue={cut}
          setCurrentAttributeValue={setCut}
        />
        <br />
        <AttributeSingleSelect
          label="Dome"
          attributes={domeData?.data || []}
          currentAttributeValue={dome}
          setCurrentAttributeValue={setDome}
        />
        <br />
        <AttributeSingleSelect
          label="Brightness"
          attributes={brightnessData.data || []}
          currentAttributeValue={brightness}
          setCurrentAttributeValue={setBrightness}
        />
        <br />
        <AttributeSingleSelect
          label="Origins"
          attributes={originsData.data || []}
          currentAttributeValue={origin}
          setCurrentAttributeValue={setOrigin}
        />
        <br />

        <AttributeSingleSelect
          label="Body Tones"
          attributes={bodyTonesData.data ?? []}
          currentAttributeValue={bodyTone}
          setCurrentAttributeValue={setBodyTone}
        />
        <br />
        <AttributeMultiSelect
          label="Colors"
          attributes={colorsData.data ?? []}
          selectedAttributeValue={selectedColor}
          setSelectedAttributeValue={setSelectedColor}
          currentAttributeValues={allColors}
          setCurrentAttributeValues={setAllColors}
        />
        <AttributeMultiSelect
          label="Patterns"
          attributes={patternsData.data ?? []}
          selectedAttributeValue={selectedPattern}
          setSelectedAttributeValue={setSelectedPattern}
          currentAttributeValues={allPatterns}
          setCurrentAttributeValues={setAllPatterns}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
};

export default ListingForm;
