module.exports = function(app, Book) {

	// Get all books
	app.get("/api/books", function(req, res) {
		Book.find(function(err, books) {
			if (err) return res.status(500).send({error: 'database failure'})
			res.json(books)
		})
	})

	// Get single book
	app.get("/api/books/:book_id", function(req, res) {
		Book.findOne({_id: req.params.book_id}, function(err, book) {
			if (err) return res.status(500).json({error: err})
			if (!book) return res.status(404).json({error: "book not found"})
			res.json(book)
		})
	})

	// Get book by author
	app.get("/api/books/author/:author", function(req, res) {
		res.end()
	})

	// Create book
	app.post("/api/books", function(req, res) {
		var book = new Book()
		book.title = req.body.title
		book.author = req.body.author
		book.published_date = new Date(req.body.published_date)

		book.save(function(err) {
			if (err) {
				console.error(err)
				res.json({result: 0})
				return
			}

			res.json({result: 1})
		})
	})

	// Update the book
	app.put("/api/books/:book_id", function(req, res) {
		res.end()
	})

	// Create book
	app.delete("/api/books/:book_id", function(req, res) {
		res.end()
	})

}