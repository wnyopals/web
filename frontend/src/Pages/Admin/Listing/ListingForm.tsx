import { useEffect, useState } from "react"
import { useGetBodyTonesQuery, useGetColorsQuery, useGetCutsQuery, useGetDomesQuery, useGetListingStatusesQuery, useGetOpalTypesQuery, useGetOriginsQuery, useGetPatternsQuery } from "../../../store/features/apiSlice";

const ListingForm = () => {
    //data
    
    const statusData = useGetListingStatusesQuery(null);
    const opalTypeData = useGetOpalTypesQuery(null)
    const cutsData = useGetCutsQuery(null);
    const domeData = useGetDomesQuery(null);
    const originsData = useGetOriginsQuery(null);
    const bodyTonesData = useGetBodyTonesQuery(null);
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
    // add all colors here
    const [allColors, setAllColors] = useState<number[]>([]) 
    // add all patterns here
    const [allPatterns, setAllPatterns] = useState<number[]>([])
  

    function onColorButtonClick(e) {
        e.preventDefault()
        console.log(e.target.value)
        const value = allColors?.findIndex(element => element === parseInt(e.target.value))
        if (value >= 0) {
            setAllColors(allColors?.filter((value) => value !== parseInt(e.target.value)))
            return
        } else {
            setAllColors([...allColors, parseInt(e.target.value)])
            return
        }
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
            <label>Size (LxWxD)</label>
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
        <select onChange={e => setStatus(parseInt(e.target.value))} value={status}>
            <label>status</label>
            {statusData?.data?.map(statusData => (
                <option value={statusData?.id}>{statusData?.name}</option>
            ))}
        </select>
        <br/>
        <select onChange={e => setOpalType(parseInt(e.target.value))} value={opalType}>
            {opalTypeData?.data?.map(opalType => (
                <option value={opalType?.id}>{opalType?.name}</option>
            ))}
        </select>
        <br/>
        <select onChange={e => setCut(parseInt(e.target.value))} value={cut}>
            {cutsData?.data?.map(cuts => (
                <option value={cuts?.id}>{cuts?.name}</option>
            ))}
        </select>
        <br/>
        <select onChange={e => setDome(parseInt(e.target.value))} value={dome}>
            {domeData?.data?.map(dome => (
                <option value={dome?.id}>{dome?.name}</option>
            ))}
        </select>
        <br/>
        <select onChange={e => setOrigin(parseInt(e.target.value))} value={origin}>
            {originsData?.data?.map(origin => (
                <option value={origin?.id}>{origin?.name}</option>
            ))}
        </select>
        <br/>
        <select onChange={e => setBodyTone(parseInt(e.target.value))} value={origin}>
            {bodyTonesData?.data?.map(bodyTone => (
                <option value={bodyTone?.id}>{bodyTone?.name}</option>
            ))}
        </select>
        <br/>
        <div>
            <label>Colors</label><br/>
            {colorsData?.data?.map(color => (
                <>
                    {allColors?.indexOf(color?.id) >= 0 ? 
                        <button onClick={onColorButtonClick} value={color?.id}>add {color?.name}</button>
                        :
                        <button onClick={onColorButtonClick} value={color?.id}>remove {color?.name}</button>
                    }
                    <br/>
                </>
            ))}
        </div>
        <br/>
        <div>
            <label>Patterns</label><br/>
            {patternsData?.data?.map(pattern => (
                <><button value={pattern?.id}>{pattern?.name}</button><br/></>
            ))}
        </div>
    </form>
  )
}

export default ListingForm
