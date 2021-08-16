import React, { useEffect, useState } from 'react';
import { Api_weather } from './axios'
import './copm_weather.css'
import { WiStrongWind } from "react-icons/wi";


export default function Description_wind(props) {
    const [wind, setWind] = useState(0);
    useEffect(()=>{
        Api_weather(props.lon,props.lat).then(response=>{
            setWind(response.data.wind.speed)
        })
    },[props.lon,props.lat])
    return (
        <div className="Description">
            <h3>{props.name}</h3>
            <div>
                <WiStrongWind className="Iconstyle" />
                <h2>{wind}</h2>
            </div>
        </div>
    );
}

