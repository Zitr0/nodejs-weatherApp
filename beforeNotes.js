console.log('Starting')

setTimeout(() => {
    console.log('2 Second timer')
}, 2000);

setTimeout(() => {
    console.log('0 Second timer')
}, 0);

console.log('Stopping')

  //console.log('body: ', body)

  const data = JSON.parse(body)
  console.log(data.current)



  // Geocoding
// Address -> Lat/long -> Weather

/*  const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/rionegro.json?access_token=pk.eyJ1IjoiY2FtaWxvb3J0aXoiLCJhIjoiY2t0ZXU2NDYxMDExYjJ2cnpkcm9nZ3ZkeSJ9.LW7IZaESvm1dmx9DZ2OfQQ&limit=1'

request({url: geocodeURL, json: true}, (error, response, body)=>{
    
    if(error){
        console.log('Unable to connect to location service!')
    }else if(body.features==0){
        console.log('Unable to find location. Try another search')
    }else{
        console.log('Error: ', error)
        console.log('Status Code:' , response & response.statusCode)
    
        const datos = body.features
        const latitude = datos[0].center[1]
        const longitude = datos[0].center[0]
    
        console.log(datos)
        console.log(latitude, ' ', longitude)
    }
    
})  */

/* const url = 'http://api.weatherstack.com//current?access_key=ac3817815548f77bc2e4b8c0b4a99ae5&query='

 request({url: url, json: true}, (error, response, body)=>{

    if (error){
        console.log('Unable to connect to weather service!')
    }else if(response.body.error){
        console.log('Unable to find location')
    }else{
        console.log('error: ', error)
        console.log('statusCode: ',response && response.statusCode)
        
        const datos = body.current
        const info = [datos.weather_descriptions[0], datos.temperature, datos.feelslike]

        console.log(info[0],'. It is currently ', info[1], ' degrees out. It feels like ', info[2],' degress out.')
    }

    

app.get('/about', (req, res)=>{
    res.send('<h1>About</h1>')
}) 

app.get('/weather', (req, res)=>{
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'

    })
})
    

})  */