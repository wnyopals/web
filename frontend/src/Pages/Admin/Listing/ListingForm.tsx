import { useEffect, useState } from "react"
import { useGetBodyTonesQuery, useGetColorsQuery, useGetCutsQuery, useGetDomesQuery, useGetListingStatusesQuery, useGetOpalTypesQuery, useGetOriginsQuery, useGetPatternsQuery } from "../../../store/features/apiSlice";

const ListingForm = () => {
    //data
    
    const statusData = useGetListingStatusesQuery(null);
    const opalTypeData = useGetOpalTypesQuery(null)
    const cutsData = useGetCutsQuery(null);
    const domeData = useGetDomesQuery(null);
    const originsData = useGetOriginsQuery(null);
    const bodyTones = useGetBodyTonesQuery(null);
    const colorsData = useGetColorsQuery(null);
    const patternsData = useGetPatternsQuery(null)

    //modify
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0.00);
    const [length, setLength] = useState(0.00);
    const [width, setWidth] = useState(0.00);
    const [height, setHeight] = useState(0.00);
    const [quantity, setQuantity] = useState(0);
    
    const [status, setStatus] = useState(1);
    const [opalType, setOpalType] = useState(1);
    const [cut, setCut] = useState(1);
    const [dome, setDome] = useState(1);
    const [origin, setOrigin] = useState(1);
    const [bodyTome, setBodyTone] = useState(1);
    const [colors, setColors] = useState(1);
    // add all colors here
    const [allColors, setAllColors] = useState([]) 
    const [patterns, setPatterns] = useState(1);
    // add all patterns here
    const [allPatterns, setAllPatterns] = useState([])
  

    function onStatusChange (e) {
        setStatus(e.target.value)
    }

    return (
    <form>
        <div>
            <label>Title</label>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <br/>
        <div>
            <label>Description</label>
            <input value={description} onChange={e => setDescription(e.target.value)}/>
        </div>
        <br/>
        <div>
            <label>Price</label>
            <input type="number" value={price} onChange={e => setPrice(parseFloat(e.target.value))}/>
        </div>
        <br/>
        <div>
            <input type="number" value={length} onChange={e => setLength(parseFloat(e.target.value))}/>
            <span>x</span>
            <input type="number" value={width} onChange={e => setWidth(parseFloat(e.target.value))}/>
            <span>x</span>
            <input type="number" value={height} onChange={e => setHeight(parseFloat(e.target.value))}/>
        </div>
        <br/>
        <div>
            <label>Quantity</label>
            <input type="number" value={quantity} onChange={e => setQuantity(parseFloat(e.target.value))}/>
        </div>
        <br/>
        <select value={status}>
            <label>status</label>
            {statusData?.data?.map(statusData => (
                <option value={statusData?.id}>{statusData?.name}</option>
            ))}
        </select>
        <br/>
        <select value={opalType}>
            {opalTypeData?.data?.map(opalType => (
                <option value={opalType?.id}>{opalType?.name}</option>
            ))}
        </select>
        <br/>
        <select value={cut}>
            {cutsData?.data?.map(cuts => (
                <option value={cuts?.id}>{cuts?.name}</option>
            ))}
        </select>
        <br/>
        <select value={dome}>
            {domeData?.data?.map(dome => (
                <option value={dome?.id}>{dome?.name}</option>
            ))}
        </select>
        <br/>
        <select value={origin}>
            {originsData?.data?.map(origin => (
                <option value={origin?.id}>{origin?.name}</option>
            ))}
        </select>
        <br/>
        <div>
            <select value={colors}>
                {colorsData?.data?.map(colors => (
                    <option value={colors?.id}>{colors?.name}</option>
                ))}
            </select>
            <button>Add to listing</button>
        </div>
        <div>
            <select value={patterns}>
                {patternsData?.data?.map(patterns => (
                    <option value={patterns?.id}>{patterns?.name}</option>
                ))}
            </select>
            <button>Add to listing</button>
        </div>
    </form>
  )
}

export default ListingForm
