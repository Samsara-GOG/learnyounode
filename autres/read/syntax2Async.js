var fs = require('fs')

function finishedReading(error, movieData) {
  if (error) return console.error(error)
    console.log(movieData.toString());
}

fs.readFile('movie.txt', finishedReading)