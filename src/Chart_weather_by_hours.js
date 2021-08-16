import React, {useEffect, useState } from 'react';
import { Bar, Line, Pin } from 'react-chartjs-2';
import { Api_weather, Api_list_weather } from './component/axios';


export default function Chart_weather_hours(props) {
    const [datalist, setdatalist] = useState([])
    const [labelslist,setLabelslist]=useState([])
    // const [lat, setLat] = useState(0)
    // const [lon, setLon] = useState(0)

    const chartData={
        labels: labelslist,
        datasets: [
            {
                label: 'Temperature',
                data: datalist,
                borderColor: 'rgba(255, 255, 255, 0.2)',
                fill: false,
                pointBackgroundColor: 'transparent',
                pointBorderColor: '#FFFFFF',
                pointHoverBorderColor: 'rgba(255, 255, 255, 0.2)',
                pointHoverBorderWidth: 10,
                lineTension: 0,
            },
        ],
        options: {
            scales: {
                xAxes: [{
                    display: false,
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero: true,
                    },
                }]
            }
        }
    }


    // useEffect(()=>{
    //     Api_weather(props.city_name).then(response => {
    //         setLat(response.data.coord.lat)
    //         setLon(response.data.coord.lon)  
    //     })
    // },[])
    // useEffect(()=>{
    //     Api_weather(props.city_name).then(response => {
    //         setLat(response.data.coord.lat)
    //         setLon(response.data.coord.lon)  
    //     })
    // },[props.city_name])

    useEffect(()=>{
        Api_list_weather(props.lon,props.lat).then(response => {
            const listtime = []
            const listdatatemp = []
            response.data.list.map((item, index) => {
                if(index<=6) {
                    listtime.push(item.dt_txt.substring(11,16))
                    listdatatemp.push(parseInt(item.main.temp- 273.15))
                 }
             });
            setLabelslist([...listtime])
            setdatalist([...listdatatemp])
        })
    },[props.lon,props.lat])
    
    return (
        <div className="">
            <Line
                data={chartData}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            display: true,
                        }],
                        yAxes: [{
                            display: false,
                            ticks: {
                                beginAtZero: true,
                            },
                        }]
                    }
                }
                }
            />

        </div>
    );
}
