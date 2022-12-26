import React, {useState, useEffect} from 'react'
import {Slider} from '@material-ui/core'
import './Filters.css'
import { PROPERTIES } from '../../Data/properties'

const Filters = ({updateProperties}) => {
    const [data, setData] = useState(PROPERTIES)
    const [val, setVal] = useState([500, 4000])
    const [location, setLocation] = useState('All')
    const [date, setDate] = useState('')
    const [type, setType] = useState('All')


    const updateData = () => {
        updateProperties(data)
        setData(PROPERTIES)
    }

    useEffect(() => {
        let result;
        if(location === 'All'){
            result = data
        }else{
        result = data.filter(prop => prop.location === location);
    }
   setData(result)
}, [location]);

useEffect(() => {
    let result;
    if(type === 'All'){
        result = data
    }else{
    result = data.filter(prop => prop.type === type);
}
    setData(result)
}, [type]);

useEffect(() => {
    let result;
    if(date === ''){
        result = data
    }else{
    result = data.filter(prop => new Date (prop.availableFrom) <= new Date (date));
}
    setData(result)
}, [date]);

useEffect(() => {
    let result;
    result = data.filter(prop => prop.price >= val[0] && prop.price <= val[1]);
    setData(result)
}, [val]);


    const updateRange = (e, data) => {
        setVal(data)
    }
  return (
    <div className='filters'>
        <div className="loc">
        <label>Location</label>
        <br />
        <select onChange={(e) => setLocation(e.target.value)}>
        <option value={'All'}>
                All
            </option>
            <option value={'New York'}>
                New York
            </option>
            <option value={'Texas'}>
               Texas
            </option>
            <option value={'Dallas'}>
               Dallas
            </option>
        </select>
        </div>
        <div className="when">
            <label>When</label>
            <br />
            <input onChange={(e) => setDate(e.target.value)} type="date" min={new Date().toISOString().split('T')[0]} />
        </div>
        <div className="priceRange">
            <label>Price ({val[0] + '-' + val[1]})</label>
            <br />
            <Slider style={{width:200}}
            value = {val}
            onChange = {updateRange}
            min = {500}
            max = {4000}
            />
        </div>
        <div className="type">
        <label>Type</label>
        <br />
        <select onChange={(e) => setType(e.target.value)}>
        <option value={'All'}>
             All
            </option>
        <option value={'House'}>
             House
            </option>
            <option value={'Villa'}>
               Villa
            </option>
        </select>
        </div>
        <div className="cta">
           
            <p onClick={() => updateData()}>Search</p>
        </div>
    </div>
  )
}

export default Filters