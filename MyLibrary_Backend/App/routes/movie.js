var express = require('express');
var router = express.Router();
const movies = require('./../model/movie.js');

router.get('/', async function(req, res, next) {

    let response = await movies.findAll();
    res.send(response);

});

router.post('/', async function(req, res, next) {

    const movieName = req.body.movieName;
    const description = req.body.description;
    const durationHours = req.body.durationHours;
    const durationMinutes = req.body.durationMinutes;
    const durationSeconds = req.body.durationSeconds;
    const movieURL = req.body.movieURL;
    const releaseDate = req.body.releaseDate;

    const movie = {
        movieName: movieName,
        description: description,
        durationHours: durationHours,
        durationMinutes: durationMinutes,
        durationSeconds: durationSeconds,
        movieURL: movieURL,
        releaseDate: releaseDate,
        dateOfEntry: new Date()
    };

    movies.create(movie).then(
        result => res.send(result)
    );


});

router.put('/', async function(req, res, next) {

    const movieID = req.body.movieID;
    const movieName = req.body.movieName;
    const description = req.body.description;
    const durationHours = req.body.durationHours;
    const durationMinutes = req.body.durationMinutes;
    const durationSeconds = req.body.durationSeconds;
    const movieURL = req.body.movieURL;
    const releaseDate = req.body.releaseDate;

    const movie = {
        movieName: movieName,
        description: description,
        durationHours: durationHours,
        durationMinutes: durationMinutes,
        durationSeconds: durationSeconds,
        movieURL: movieURL,
        releaseDate: releaseDate,
    };

    movies.update(movie,
        {
            where: {
                movieID: movieID
            }
        }).then(
        result => res.send(result)
    );

});

router.delete('/', async function(req, res, next) {

    const movieID = req.body.movieID;

    movies.destroy({
            where: {
                movieID: movieID
            }
        }
    ).then( response => {
        res.send(response.toString())
    });

});

router.get('/sortByNameAsc', async function(req, res, next) {

    let response = await movies.findAll({
        order: [
            ['movieName', 'ASC']
        ]
    });
    res.send(response);

});

router.get('/sortByNameDesc', async function(req, res, next) {

    let response = await movies.findAll({
        order: [
            ['movieName', 'DESC']
        ]
    });
    res.send(response);

});

router.get('/sortByReleaseDateAsc', async function(req, res, next) {

    let response = await movies.findAll({
        order: [
            ['releaseDate', 'DESC']
        ]
    });
    res.send(response);

});

router.get('/sortByReleaseDateDesc', async function(req, res, next) {

    let response = await movies.findAll({
        order: [
            ['releaseDate', 'DESC']
        ]
    });
    res.send(response);

});

router.get('/byMovieID/:movieID', (req, res, next) => {

    const movieID = req.params.movieID;

    movies.findAll({
        where: {
            movieID: movieID
        }
    }).then(
        result => res.send(result)
    );
});


module.exports = router;
