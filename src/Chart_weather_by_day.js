import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Api_weather, Api_list_weather } from './component/axios'


export default function Chart_weather_by_day(props) {
    const [datalist, setdatalist] = useState([])
    const [labelslist, setLabelslist] = useState([])
    // const [lat, setLat] = useState(0)
    // const [lon, setLon] = useState(0)

    const chartData = {
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


    // useEffect(() => {
    //     Api_weather(props.city_name).then(response => {
    //         setLat(response.data.coord.lat)
    //         setLon(response.data.coord.lon)
    //     })
    // }, [])
    // useEffect(() => {
    //     Api_weather(props.city_name).then(response => {
    //         setLat(response.data.coord.lat)
    //         setLon(response.data.coord.lon)
    //     })
    // }, [props.city_name]) 
    useEffect(() => {
        Api_list_weather(props.lon,props.lat).then(response => {
            const listtime = []
            const listdatatemp = []
            for (let i = 1; listtime.length <= 3; i++) {
                if (response.data.list[i].dt_txt.substring(5, 11) !== response.data.list[i - 1].dt_txt.substring(5, 11)) {
                    listtime.push(response.data.list[i].dt_txt.substring(5, 11))
                    listdatatemp.push(parseInt(response.data.list[i].main.temp - 273.15));
                }
            }
           // console.log(response.data)
            setLabelslist([...listtime])
            setdatalist([...listdatatemp])
        })
    }, [props.lon, props.lat])

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


