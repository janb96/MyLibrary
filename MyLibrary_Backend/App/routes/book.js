var express = require('express');
var router = express.Router();
let books = require('./../model/book.js');
const ISBN = require('isbn').ISBN;

router.get('/', async function(req, res, next) {

  	let response = await books.findAll();
  	res.send(response);
  	
});

router.post('/', async function(req, res, next) {

	const bookName = req.body.bookName;
	const bookAuthor = req.body.bookAuthor;
	const bookISBN = ISBN.parse(req.body.bookISBN);

	if(bookISBN == null) {
		res.send("ISBN is incorrect");
	} else if(bookISBN.isValid()) {
		const book = {
			bookName: bookName,
			bookAuthor: bookAuthor,
			bookISBN: bookISBN.asIsbn13()
		};

		books.create(book).then(
			result => res.send(result)
		);

	} else {
		res.send("ISBN is incorrect");
	}

});

router.delete('/', async function(req, res, next) {

	const bookID = req.body.bookID;
	books.destroy({
			where: {
				bookID: bookID
			}
		}
	).then( response => {
		res.send(response.toString())
	});

});


module.exports = router;
