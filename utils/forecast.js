
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

import request from 'request'

const forecast = (latitude, longitude, callback) => {
    const url  = 'http://api.weatherstack.com/current?access_key=9a77f189451305767d6d7b8606f97a6e&query=' + latitude + ',' + longitude

    request( {url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to forecast', undefined)
         } else if (body.error) {
             callback('Unable to find weather for coordinates', undefined)
         } else {
             callback( undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + '.' )
         }
    })
}

export default {
    forecast: forecast
}
