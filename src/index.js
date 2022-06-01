import {fetchWithTimeout} from './services.json'

const movies = require('./data/movies.json');

export function fetchMovies(){
    const resolveFunction = ()=> movies;

    fetchWithTimeout(1000)
        .then(resolveFunction)
}

moviePromise = fetchMovies().then((results)=>{
    console.log(results);
})