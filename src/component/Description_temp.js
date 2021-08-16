import React, { useEffect, useState } from 'react';
import './copm_weather.css'
import { WiCelsius } from "react-icons/wi";
import { Api_weather} from './axios'
export default function Description_temp(props) {
    const [temp,setTemp]=useState(0);

    useEffect(()=>{
        Api_weather(props.lon,props.lat).then(response=>{
            setTemp(response.data.main.temp);
        })
    },[props.lon,props.lat])

    return (
        <div className="Description">
            <h3>{props.name}</h3>
            <div>
                <WiCelsius className="Iconstyle" />
                  <h2>  <WiCelsius /></h2> 
                  <h2>
                      {
                         parseInt(temp- 273.15)
                      }
                  </h2>
            </div>
        </div>
    );
}
