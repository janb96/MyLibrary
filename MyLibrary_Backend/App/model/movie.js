var sequelize = require('../connect.js');
var Sequelize = require('sequelize');
sequelize.sync();

let Movie = sequelize.define('Book', {

    movieID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    movieName: Sequelize.STRING,
    description: Sequelize.TEXT,
    durationHours: Sequelize.INTEGER,
    durationMinutes: Sequelize.INTEGER,
    durationSeconds: Sequelize.INTEGER,
    movieURL: Sequelize.STRING,
    releaseDate: Sequelize.DATEONLY,
    dateOfEntry: Sequelize.DATEONLY
});

module.exports = Movie;