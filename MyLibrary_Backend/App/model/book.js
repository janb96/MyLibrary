var sequelize = require('../connect.js');
var Sequelize = require('sequelize');
sequelize.sync();

let Book = sequelize.define('Book', {
    
    bookID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bookName: Sequelize.STRING,
    bookAuthor: Sequelize.STRING,
    bookISBN: Sequelize.STRING,
    bookURL: Sequelize.STRING,
    releaseDate: Sequelize.DATEONLY,
    dateOfEntry: Sequelize.DATEONLY
});

module.exports = Book;