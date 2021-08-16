import axios from "axios";
// import {returnCityname} from '../App'
const api_key = "c54d5b545253c7afb03e52c334b513f5";
//c54d5b545253c7afb03e52c334b513f5
//f6a33aad77acce796198afa0479d4592

let url_weather = `api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
export async function Api_weather(lon,lat) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
    // console.log(response.data);
    return response;
  }
  catch (err) {
    console.error(err)
  }
}
//https://api.openweathermap.org/data/2.5/weather?q=${prop}&appid=${api_key}
export async function Api_list_weather(lat,lon) {
 // console.log(lat+lon)
  try {
    const response = await axios.post(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`)
    
    return response;
  }
  catch (err) {
    console.error(err)
  }
}


export async function Api_weather_By_NameCity(prop) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${prop}&appid=${api_key}`)
    // console.log(response.data);
    return response;
  }
  catch (err) {
    console.error(err)
  }
}