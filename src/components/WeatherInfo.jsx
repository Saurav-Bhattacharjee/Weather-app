export const WeatherInfo = ({weather})=>{
    if(!weather) return null;

    return(
    <div className=" ">
        <h2 className="...">Weather in {weather.name}</h2>
        <p className="....">Temperature:{weather.main.temp}C</p>
        <p className="....">Weather: {weather.weather[0].description}</p>

    </div>)
    
}