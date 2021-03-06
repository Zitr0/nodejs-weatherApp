const path = require('path')
const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const express = require('express')
const hbs = require('hbs')

const { application } = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Setud handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//Setud static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('',(req, res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Camilo Ortiz'
    })
})

app.get('/about',(req, res)=>{
    res.render('about',{
        title: 'About',
        name: 'Camilo Ortiz'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title: 'Help',
        helpText: 'camiloorvi@gmail.com',
        name: 'Camilo Ortiz'
    })
})

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }


    geocode(req.query.address, (error, {latitude,longitude, location}={})=>{

        if(error){
            return res.send({error: error})
        }
        
        forecast(latitude, longitude, (error, forecastData)=>{
    
                if(error){
                    return res.send({error: error})
                }

                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
            })
    }) 

    
   /*  res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia',
        address: req.query.address

    }) */
})

app.get('/products', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404',{
        title: '404',
        name: 'Camilo Ortiz',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res)=>{
    res.render('404',{
        title: '404',
        name: 'Camilo Ortiz',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, ()=>{
    console.log('Server is up!!!.' + port)
})