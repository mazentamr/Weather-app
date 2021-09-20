import './App.css';
import './component/copm_weather.css'
import { WiCloudy } from "react-icons/wi";
import Weathertemp from './component/component_temp_weather'
import { Api_weather, Api_weather_By_NameCity } from './component/axios'
import { Component, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chart_weather_by_day from './Chart_weather_by_day';
import Chart_weather_hours from './Chart_weather_by_hours'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
const useStyles = makeStyles({
  container: {
    marginTop: "50px"
  }
});

function App() {
  const [new_city, setNew_city] = useState("")
  const [city_name, setCity_name] = useState("")
  const [checkedA, setcheckedA] = useState(true)
  const [checkedB, setcheckedB] = useState(true)
  const [lon, setLon] = useState(0)
  const [lat, setLat] = useState(0)


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLon(position.coords.longitude)
      setLat(position.coords.latitude)
    });
  }, [])

  useEffect(() => {
    Api_weather(lon, lat).then(response => {
      setCity_name(response.data.name)
    });
  }, [lon, lat])


  const onchange = (event) => {
    setNew_city(event.target.value)
  }

  const onclick = () => {
    setCity_name(new_city)
    Api_weather_By_NameCity(new_city).then(response => {
      setLon(response.data.coord.lon)
      setLat(response.data.coord.lat)
    })
  }

  return (
    <div className="App">
      <Container>
        <div className="header">
          <Typography vatiant="h1"><WiCloudy style={{ fontSize: "45px" }} /> WEATHER</Typography>
          <div className="form">
            <TextField id="standard-basic" label="City" value={new_city} onChange={onchange} />
            <Button variant="outlined" onClick={onclick}>
              Search
            </Button>
          </div>
          <Typography > Weather {city_name} </Typography>
          <Grid container spacing={3}>
            <Grid xs={12} md={6} >
              <Chart_weather_by_day lon={lon} lat={lat} />
            </Grid>
            <Grid xs={12} md={6}>
              <Chart_weather_hours lon={lon} lat={lat} />
            </Grid>
            <Grid xs={12}>
              <Weathertemp lon={lon} lat={lat} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
export default App;