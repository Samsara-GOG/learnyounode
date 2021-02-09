var fs = require('fs')

fs.readFile('movie.txt', function finishedReading(error, movieData) {
  if (error) return console.error(error)
    console.log(movieData.toString());
})