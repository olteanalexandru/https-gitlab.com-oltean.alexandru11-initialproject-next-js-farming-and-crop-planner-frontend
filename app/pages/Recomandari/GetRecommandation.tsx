import  WeatherTable  from './VremeFetch';
import { WeatherData } from './VremeFetch';
import { useState } from 'react';

 const getRecommendation = (day: WeatherData, nivelUmiditateSol: number, tipCultura: string) => {
    const temperatura = day.temperature;
    const precipitatii = day.precipitation;
  
    if (temperatura < 10) {
      return 'Este posibil să fie prea frig pentru majoritatea culturilor să crească. Luați în considerare plantarea de culturi rezistente la frig, cum ar fi varza kale, spanacul sau usturoiul.';
    } else if (temperatura > 25) {
      return 'Este posibil să fie prea cald pentru majoritatea culturilor să crească. Luați în considerare plantarea de culturi rezistente la căldură, cum ar fi roșiile, ardeii sau vinetele.';
    } else if (precipitatii > 20) {
      return 'Există o probabilitate ridicată de ploaie astăzi, deci poate nu este o idee bună să lucrați în câmp. Verificați culturile pentru semne de boli sau dăunători după ploaie.';
    } else if (nivelUmiditateSol < 50) {
      return 'Nivelul de umiditate al solului este prea scăzut. Luați în considerare irigarea culturilor pentru a vă asigura că au suficientă apă.';
    } else {
      // Determinați recomandarea specifică culturii în funcție de stadiul de creștere și alți factori
      if (tipCultura === 'porumb') {
        if (day.date === '2023-04-03') {
          return 'Se recomandă aplicarea îngrășământului azotat astăzi pentru a spori creșterea în timpul stadiului vegetativ.';
        } else if (day.date === '2023-04-05') {
          return 'Se recomandă aplicarea îngrășământului potasic astăzi pentru a spori rezistența tulpinii în timpul stadiului reproductiv.';
        } else {
          return 'Condițiile meteorologice sunt favorabile pentru creșterea porumbului. Verificați câmpurile regulat pentru semne de boli sau dăunători.';
        }
      } else if (tipCultura === 'grâu') {
        if (day.date === '2023-04-04') {
          return 'Se recomandă aplicarea îngrășământului azotat astăzi pentru a spori formarea de lastari în timpul stadiului de creștere timpurie.';
        } else if (day.date === '2023-04-07') {
          return 'Se recomandă aplicarea îngrășământului fosforic astăzi pentru a spori dezvoltarea boabelor în timpul stadiului reproductiv.';
        } else {
          return 'Condițiile meteorologice sunt favorabile pentru creșterea grâului. Verificați câmpurile regulat pentru semne de boli sau dăunători și asigurați-vă că solul are suficientă umiditate.';
        } 
    }
        else {
        return 'Nu am informații suficiente despre această cultură pentru a oferi recomandări specifice. Vă recomandăm să vă consultați cu experți locali pentru a determina cele mai bune practici agricole pentru această cultură.';
        }
        }
        };
        
        export default const Recomandari = () => {
        const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
        const [nivelUmiditateSol, setNivelUmiditateSol] = useState<number>(0);
        const [tipCultura, setTipCultura] = useState<string>('');
        const [recomandare, setRecomandare] = useState<string>('');

        const handleNivelUmiditateSolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNivelUmiditateSol(Number(event.target.value));
        }

        const handleTipCulturaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipCultura(event.target.value);
        }

        const handleGetRecommendation = () => {
        if (weatherData.length > 0) {
        setRecomandare(getRecommendation(weatherData[0], nivelUmiditateSol, tipCultura));
        }
        }

        return (
        <>
        <WeatherTable setWeatherData={setWeatherData} />
        <div>
        <label htmlFor="nivelUmiditateSol">Nivel umiditate sol</label>
        <input
        type="number"
        id="nivelUmiditateSol"
        value={nivelUmiditateSol}
        onChange={handleNivelUmiditateSolChange}
        />
        </div>
        <div>
        <label htmlFor="tipCultura">Tip cultura</label>
        <input
        type="text"
        id="tipCultura"
        value={tipCultura}
        onChange={handleTipCulturaChange}
        />
        </div>
        <button onClick={handleGetRecommendation}>Obțineți recomandarea</button>
        <div>{recomandare}</div>
        </>
        );
        };




        