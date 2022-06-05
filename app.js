
import geocode from './utils/geocode.js'
import forecast from './utils/forecast.js'

const address = process.argv[2] 

if (!address) { 
    console.log('Please provide an address!')
} else {
    geocode.geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            console.log(error)
        } 

    forecast.forecast(latitude, longitude, (error, forecastData) => {
        if (error) { 
            console.log(error)
        }   
        
        console.log(data.location)
        console.log(forecastData)
        
        })
    }) 
} 
