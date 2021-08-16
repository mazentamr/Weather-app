import React, { useEffect, useState } from 'react';
import {Api_weather} from './axios';
import './copm_weather.css'
import { WiCelsius } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";

export default function Description_max_temp(props) {
    const [maxtemp,setMaxtem]=useState(0);
    useEffect(()=>{
        Api_weather(props.lon,props.lat).then(response=>{
            setMaxtem(response.data.main.temp_max);
        })
    },[props.lon,props.lat])

    return (
        <div className="Description">
            <h3>{props.name}</h3>
            <div>
                <WiThermometer className="Iconstyle" />
                
                <h2>{parseInt(maxtemp - 273.15)}<WiCelsius /></h2>
            </div>
        </div>
    );
}