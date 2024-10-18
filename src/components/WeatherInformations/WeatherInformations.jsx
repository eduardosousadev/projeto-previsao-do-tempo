import './WeatherInformations.css';

const WeatherInformations = ({weather}) => {
    const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleString('pt-BR', {hour: '2-digit', minute: '2-digit'});
    const sunset = new Date(weather.sys.sunset * 1000).toLocaleString('pt-BR', {hour: '2-digit', minute: '2-digit'});

    const checkTime = (time) => {
        return time >= '00:00' && time <= '11:59' ? 'AM' : 'PM';
    }
    return (
        <div className='weather-container'>
            <div className='weather-header'>
                <h2>{weather.name}</h2>
                <div className='weather-info'>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                    <p className='weather-temperature'>{Math.round(weather.main.temp)}°C</p>
                </div>
            </div>
            <div className='weather-body'>
                <p className='weather-description'>{weather.weather[0].description}</p>
                <div className='weather-details'>
                    <p>Nascer do sol: {sunrise}{checkTime(sunrise)}</p>
                    <p>Pôr do sol: {sunset}{checkTime(sunset)}</p>
                    <p>Sensação térmica: {Math.round(weather.main.feels_like)}°C</p>
                    <p>Umidade do ar: {weather.main.humidity}%</p>
                    <p>Pressão atmosférica: {weather.main.pressure} hPa</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherInformations;