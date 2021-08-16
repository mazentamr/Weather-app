import React, { useEffect, useState } from 'react';
import {Api_weather} from './axios';
import { WiHumidity } from "react-icons/wi";
import { FaPercentage } from "react-icons/fa";
import './copm_weather.css'

export default function Description_humidity(props){
    const [humidity,setHumidity]=useState(0);
    useEffect(()=>{
        Api_weather(props.lon,props.lat).then(response=>{
            setHumidity(response.data.main.humidity);
        })
    },[props.lon,props.lat])
    return(
        <div className="Description">
            <h3>{props.name}</h3>
                <div>
                    <WiHumidity className="Iconstyle"/>
                    <h2>{humidity}<FaPercentage/></h2> 
                </div>
        </div>
    );
}