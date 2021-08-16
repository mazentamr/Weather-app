import React, { useEffect, useState } from 'react';
import './copm_weather.css'
import {Api_weather} from './axios';
import { WiSunset } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";


export default function Description_Sunset(props){
    const [sunrise,setSunrise]=useState(0);
    const [sunset,setSunset]=useState(0);
    useEffect(()=>{
        Api_weather(props.lon,props.lat).then(response=>{
            setSunrise(response.data.sys.sunrise)
            setSunset(response.data.sys.sunset)
        })
    },[props.lon,props.lat])
    return(
        <div className="Description nn">
            <h3>{props.name}</h3>
                <div>
                    <WiSunset className="IconstyleSunset"/>
                    <h2>{new Date(sunrise).getHours()}:{new Date(sunrise).getMinutes()}</h2>
                </div>
                <div>
                    <WiSunrise className="IconstyleSunset"/>
                    <h2>{new Date(sunset).getHours()}:{new Date(sunset).getMinutes()}</h2>
                </div>
        </div>
    );
}