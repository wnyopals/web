import React, { useState } from "react";
import {
  useAddListingMutation,
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
import { listingRequest } from "../../../../types/Listing";
// import { Attribute } from "../../../../types/Attributes";

const ListingForm = () => {
  //data

  const statusData = useGetListingStatusesQuery();
  const opalTypeData = useGetOpalTypesQuery();
  const cutsData = useGetCutsQuery();
  const domeData = useGetDomesQuery();
  const originsData = useGetOriginsQuery();
  const bodyTonesData = useGetBodyTonesQuery();
  const colorsData = useGetColorsQuery();
  const patternsData = useGetPatternsQuery();
  const brightnessData = useGetBrightnessesQuery()

  //modify
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [length, setLength] = useState(0.0);
  const [width, setWidth] = useState(0.0);
  const [height, setHeight] = useState(0.0);
  const [quantity, setQuantity] = useState(0);
  const [weight, setWeight] = useState(0.0)

  const [status, setStatus] = useState<number>(0);
  const [opalType, setOpalType] = useState<number>(0);
  const [cut, setCut] = useState<number>(0);
  const [dome, setDome] = useState<number>(0);
  const [origin, setOrigin] = useState<number>(0);
  const [bodyTone, setBodyTone] = useState<number>(0);
  const [brightness, setBrightness] = useState<number>(0)
  const [selectedColor, setSelectedColor] = useState<number>(-1)
  const [selectedPattern, setSelectedPattern] = useState<number>(-1)
  // add all colors here
  const [allColors, setAllColors] = useState<number[]>([]);
  // add all patterns here
  const [allPatterns, setAllPatterns] = useState<number[]>([]);

  const [
    addListing,
    {
      isLoading,
      isSuccess,
      isError,
    }
  ] = useAddListingMutation()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newListing:listingRequest = {
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
      brightness
      // colors: allColors,
      // patterns: allPatterns
    }

    addListing(newListing)
    if(isError) alert("Send issue has occured")
  }

  function onColorSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const colorIdAsNumber:number = parseInt(e.target.value)
    setSelectedColor(colorIdAsNumber);
  }

  function onPatternSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const patternIdAsNumber: number = parseInt(e.target.value)
    setSelectedPattern(patternIdAsNumber);
  }

  function onAddColorButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if(selectedColor === -1) 
      alert("Please select a valid color")
    else 
      setAllColors(previousColors => [...previousColors, selectedColor])
  }

  function onAddPatternButtonClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if(selectedColor === -1) 
      alert("Please select a valid color")
    else
      setAllPatterns(previousPatterns => [...previousPatterns, selectedPattern])
  }

  let errorComponent;

  if (isError) errorComponent = <h2>Error was recieved</h2>;
  if (isSuccess) errorComponent = <h1>Success</h1>;
  if (isLoading) errorComponent = <h2>Loading</h2>;

  return (
    <>
      <div>
        <h1>
          Errors or Success
        </h1>
        <div>
          {errorComponent}
        </div>
      </div>
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
        <div>
          <label>status</label>
          <select
            onChange={(e) => setStatus(parseInt(e.target.value))}
            value={status}
          >
            {statusData?.data?.map((statusData) => (
              <option value={statusData?.id}>{statusData?.name}</option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label>opal type</label>
          <select
            onChange={(e) => setOpalType(parseInt(e.target.value))}
            value={opalType}
          >
            {opalTypeData?.data?.map((opalType) => (
              <option value={opalType?.id}>{opalType?.name}</option>
            ))}
          </select>

        </div>
        <br />
        <div>
          <label>cuts</label>
          <select onChange={(e) => setCut(parseInt(e.target.value))} value={cut}>
            {cutsData?.data?.map((cuts) => (
              <option value={cuts?.id}>{cuts?.name}</option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label>dome</label>
          <select onChange={(e) => setDome(parseInt(e.target.value))} value={dome}>
            {domeData?.data?.map((dome) => (
              <option value={dome?.id}>{dome?.name}</option>
            ))}
          </select>
        </div>
        <br/>
        <div>
          <label>Brightness</label>
          <select onChange={(e) => setBrightness(parseInt(e.target.value))} value={brightness}>
            {brightnessData?.data?.map((brightness) => (
              <option value={brightness?.id}>{brightness?.name}</option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <label>Origins</label>
        <select
          onChange={(e) => setOrigin(parseInt(e.target.value))}
          value={origin}
        >
          {originsData?.data?.map((origin) => (
            <option value={origin?.id}>{origin?.name}</option>
          ))}
        </select>
        </div>
        <br />
        <div>
          <label>Body Tones</label>
        <select
          onChange={(e) => setBodyTone(parseInt(e.target.value))}
          value={bodyTone}
        >
          {bodyTonesData?.data?.map((bodyTone) => (
            <option value={bodyTone?.id}>{bodyTone?.name}</option>
          ))}
        </select>
        </div>
        <br />
        <div>
          <label>Colors</label>
          <select value={selectedColor} onChange={onColorSelectChange}>
            <option value={-1}>Select an option</option>
            {
              colorsData?.data?.map(color => <option key={color?.id} value={color?.id}>{color?.name}</option>)
            }
          </select>
          <button onClick={onAddColorButtonClick}>Add Color</button>
          <div>
            {
              allColors?.map(colorId => <h3 key={colorId}>color: {colorId}</h3>)
            }
          </div>
        </div>
        <div>
          <label>Patterns</label>
          <select value={selectedPattern} onChange={onPatternSelectChange}>
          <option value={-1}>Select an option</option>
            {
              patternsData?.data?.map(pattern => <option key={pattern?.id} value={pattern?.id}>{pattern?.name}</option>)
            }
          </select>
          <button onClick={onAddPatternButtonClick}>Add Pattern</button>
          <div>
            {
              allPatterns?.map(patternId => <h3>Pattern: {patternId}</h3>)
            }
          </div>
        </div>
        <input type="submit" value="" />
      </form>
    </>
  );
};

export default ListingForm;
