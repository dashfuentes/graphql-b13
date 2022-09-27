import React, { useState } from 'react';
import { GET_WEATHER_QUERY } from '../graphql/Queries';
import { useLazyQuery } from '@apollo/client';

function Home() {
    const [citySearched, setCitySearch] = useState( "" );
    console.log(citySearched)
    /**
     * @param  {} GET_WEATHER_QUERY query name from Queries.js 
     * @param  {{name:citySearched}}} city name from getCityByName documentation
     */
  
    const [fetchWeatherInfo, { data, error }] = useLazyQuery( GET_WEATHER_QUERY, {
        variables : {name: citySearched}
    } )

    if ( error ) return <h1>Error found {error}</h1>

    if ( data ) {
        console.log('response', data)
    }
        
    return (
        <div className='home'>
            
            <h1>Search for Weather</h1>
            <input
                type="text"
                placeholder="City name..."
                onChange={( event ) => {
                    setCitySearch( event.target.value )
                }}
            />
            
            <button onClick={() => fetchWeatherInfo()} >Search</button>
            <div className="weather-info">
                {
                    data && (
                        <>
                            <h1>City name : <span>{data.getCityByName.name}</span></h1>
                            <h1>temperature: <span> { data.getCityByName.weather.temperature.feelsLike}</span></h1>
                        </>
                    )
                           
                    
                }
            </div>
        </div>
    );
}

export default Home