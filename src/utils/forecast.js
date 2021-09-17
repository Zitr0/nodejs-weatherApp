const request = require('postman-request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com//current?access_key=ac3817815548f77bc2e4b8c0b4a99ae5&query=' + latitude + ',' + longitude

    request({url, json: true}, (error, {body})=>{

        if(error){
            callback('Unable to connect to weather services!', undefined)
        } else if(body.error){
            callback('Unable to find location. Try another search', undefined)

        }else{

            const datos = body.current
            const info = [datos.weather_descriptions[0], datos.temperature, datos.feelslike]


            callback(undefined, info[0] + '. It is currently ' + info[1] +  ' degrees out. It feels like ' + info[2] + ' degress out.') 
           
        }

    })
}

module.exports = forecast