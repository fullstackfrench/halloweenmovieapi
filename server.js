const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const movies = {
    'halloweentown': {
        'movieName': 'Halloweentown',
        'releaseYear': 1998,
        'directorName': 'Duwayne Dunham',
        'rottenTomatoes': 5.7
    },
    'beetlejuice':{
        'movieName': 'Beetlejuice',
        'releaseYear': 1988,
        'directorName': 'Tim Burton',
        'rottenTomatoes': 7.1
    },
    'unknown':{
        'movieName': 'unknown',
        'releaseYear': 0,
        'directorName': 'unknown',
        'rottenTomatoes': 'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response)=>{
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:movie',(request,response)=>{
    const movieName = request.params.movie.toLowerCase()

    if( movies[movieName] ){
        response.json(movies[movieName])
    }else{
        response.json(movies['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

