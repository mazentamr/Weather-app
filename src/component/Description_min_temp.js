import React, { useEffect, useState } from 'react';
import {Api_weather} from './axios';
import './copm_weather.css'
import { WiCelsius } from "react-icons/wi";
import { WiThermometerExterior } from "react-icons/wi";

export default function Description_min_temp(props){
    const [mintemp,setMintemp]=useState(0)
    useEffect(()=>{
        Api_weather(props.lon,props.lat).then(response=>{
            setMintemp(response.data.main.temp_min)
        })
    },[props.lon,props.lat])
    return(
        <div className="Description">
            <h3>{props.name}</h3>
                <div>
                    <WiThermometerExterior className="Iconstyle"/>
                    <h2>{parseInt(mintemp - 273.15)} <WiCelsius/></h2>
                </div>
        </div>
    );
}