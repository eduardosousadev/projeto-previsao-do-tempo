import './WeatherInformations5Days.css';

const WeatherInformations5Days = ({weather5Days}) => {

    let dailyForecast = {};

    for(let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        
        if(!dailyForecast[formattedDate]) {
            dailyForecast[formattedDate] = forecast;
        };
    }
    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

    const convertDate = (date) => {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', {weekday: 'long', day: "2-digit"});
        return newDate;
    }
    
    return (
        <div className="weather5Days-container">
            <h3>Previsão para os próximos 5 dias</h3>
            <div className='weather5Days-container-items'>
                {
                    next5DaysForecast.map((forecast) => (
                        <div key={forecast.dt} className="weather5Days-item">
                            <p>{convertDate(forecast)}</p>
                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="ícone do tempo" />
                            <p>{forecast.weather[0].description}</p>
                            <p>{Math.floor(forecast.main.temp_min)}°C min. / {Math.ceil(forecast.main.temp_max)}°C máx.</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default WeatherInformations5Days;