import Description_temp from "./Description_temp"
import Description_max_temp from "./Description_max_temp"
import Description_min_temp from "./Description_min_temp"
import Description_humidity from "./Description_humidity"
import Description_Sunset from "./Description_Sunset"
import Description_wind from "./Description_wind"
import Description_weather from "./Description_weather"
import Grid from '@material-ui/core/Grid'
import './copm_weather.css'

export default function Weathertemp(props) {
    return (
        <div className="copm_weather">
            <Grid container spacing={3}>
                <Grid xs={6} sm={4} md={3}>
                    <Description_weather name="Description weather" lon={props.lon} lat={props.lat} />
                </Grid>
                <Grid xs={6} sm={4} md={3}>
                    <Description_Sunset name="Sunrise" lon={props.lon} lat={props.lat} />
                </Grid>
                <Grid xs={6} sm={4} md={3}>
                    <Description_temp name="Temp" lon={props.lon} lat={props.lat} />
                </Grid>
                <Grid xs={6} sm={4} md={3}>
                    <Description_max_temp name="Max temp" lon={props.lon} lat={props.lat} />
                </Grid>
                <Grid xs={6} sm={4} md={3}>
                    <Description_min_temp name="Min temp" lon={props.lon} lat={props.lat} />
                </Grid>
                <Grid xs={6} sm={4} md={3}>
                    <Description_humidity name="Humidity" lon={props.lon} lat={props.lat} />
                </Grid>
                <Grid xs={6} sm={4} md={3}>
                    <Description_wind name="Wind" lon={props.lon} lat={props.lat} />
                </Grid>
            </Grid>
        </div>
    );
}