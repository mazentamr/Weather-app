import React, { useEffect, useState } from 'react';
import { Api_weather } from './axios'
import './copm_weather.css'
import { WiDaySunny } from "react-icons/wi";//clear sky => 01d
import { WiMoonAltNew } from "react-icons/wi";//clear sky => 01n
import { WiDayCloudy } from "react-icons/wi";//few clouds => 02d
import { WiNightAltCloudy } from "react-icons/wi";//few clouds => 02n
import { WiCloud } from "react-icons/wi";//few clouds => 03n 03d
import { WiCloudy } from "react-icons/wi";//broken clouds => 04n 04d
import { WiHail } from "react-icons/wi";//shower rain => 09n 09d
import { WiDayShowers } from "react-icons/wi";//rain => 10d
import { WiNightAltShowers } from "react-icons/wi";//rain => 10n
import { WiDayStormShowers } from "react-icons/wi";//thunderstorm => 11d
import { WiStormShowers } from "react-icons/wi";//thunderstorm => 11n
import { WiSnowflakeCold } from "react-icons/wi";//snow => 13n 13d
import { WiDust } from "react-icons/wi";//mist => 50n 50d

function ReturnIcon(props) {
    if (props.props === "01d") {
        return <WiDaySunny className="Iconstyle" />
    } else if (props.props === "01n") {
        return <WiMoonAltNew className="Iconstyle" />
    } else if (props.props === "02d") {
        return <WiDayCloudy className="Iconstyle" />
    } else if (props.props === "02n") {
        return <WiNightAltCloudy />
    } else if (props.props === "03d" || props.props === "03n") {
        return <WiCloud className="Iconstyle" />
    } else if (props.props === "04n" || props.props === "04d") {
        return <WiCloudy className="Iconstyle" />
    } else if (props.props === "09n" || props.props === "09d") {
        return <WiHail className="Iconstyle" />
    } else if (props.props === "10d") {
        return <WiDayShowers className="Iconstyle" />
    } else if (props.props === "10n") {
        return <WiNightAltShowers className="Iconstyle" />
    } else if (props.props === "11d") {
        return <WiDayStormShowers className="Iconstyle" />
    } else if (props.props === "11n") {
        return <WiStormShowers className="Iconstyle" />
    } else if (props.props === "13n" || props.props === "13d") {
        return <WiSnowflakeCold className="Iconstyle" />
    } else {
        return <WiDust className="Iconstyle" />
    }
}

export default function Description_weather(props) {
    const [id_icon, setIdeicon] = useState("");
    const [state_weather, setState_weather] = useState("");

    useEffect(() => {
        Api_weather(props.lon,props.lat).then(response => {
            setIdeicon(response.data.weather[0].icon)
            setState_weather(response.data.weather[0].description)
        })
    }, [props.lon,props.lat])


    return (
        <div className="Description nn">
            <h3>{props.name}</h3>
            <div>
                <ReturnIcon className="Iconstyle" props={id_icon} />
                <h4>{state_weather}</h4>
            </div>
        </div>
    );
}