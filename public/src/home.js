// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// Note: Please do not change the name of the functions. The tests use those names to validate your code.


function getTotalBooksCount(books) {
	let result = books.length
	return result
}

function getTotalAccountsCount(accounts) {
	let result = accounts.length
	return result
}

function getBooksBorrowedCount(books) {
	let result = 0;
	books.forEach((book) =>{
		if(book.borrows[0].returned === false){
			result ++
		}
	});
	return result
}

function getMostCommonGenres(books) {
	let result = []
	const acc = books.reduce((acc, book) => {
		//console.log(acc[book.genre])
		if(acc[book.genre]){
			acc[book.genre] = acc[book.genre] + 1;
			//console.log(book.genre)
		}else{ //key does not exits
			acc[book.genre] = 1;
		}
		//console.log(acc)
		return acc;
	}, {});
	//loop through object with for in
	
	for(let key in acc){
		const tempObj = {name: key, count: acc[key]}
		result.push(tempObj);
	}
	
	result.sort((a, b) => b.count - a.count);
	
	result = result.slice(0,5);
	
	//console.log(acc)
	//console.log(result)
	return result
}

function getMostPopularBooks(books) {
	console.log(0)
	/*
		take in list of books
		find name for each book
		count number of 'borrowed' for each book (borrows.length)
		set as obj inside array
		[
			{name: nameOfBook, count: numBorrows}
		]
	*/
	let result = []
	//cycle through all of books
	
	
	const acc = books.reduce((acc, book) => {
		//destructoring
		const numBorrows = book.borrows.length
		const bookName = book.title
		//create a temporary object to hold values of books
		const tempObj = {name: bookName, count: numBorrows}
		//push object into result array
		result.push(tempObj)
	}, {});
	
	
	console.log(1)
	//sort the result array into largest -> smallest
	
	result.sort((a, b) => b.count - a.count);
	//cut the result array down to the top 5 books
	
	result = result.slice(0,5);
	
	return result
	
}

function getMostPopularAuthors(books, authors) {
	/*
		take in books and authors
		find and author
			-find author book
			-count number of times book has been borrowed
		reutrn as obj inside array
		[
			{name: nameOfAuthor, count: numAllBooksBorrowed}
		]
	*/
	let result = []
	const acc = authors.reduce((acc, author) => {
		const authorId = author.id
		let authorBooks = []
		let totalCount = 0
		const authorName = `${author.name.first} ${author.name.last}`
		authorBooks = books.filter((book) => {
			const bookAuthorId = book.authorId
			const totalBorrowed = book.borrows.length
			if(authorId === bookAuthorId){
				totalCount +=  totalBorrowed
			}
		});
		const tempObj = {name: authorName, count: totalCount}
		result.push(tempObj)
	});
	result.sort((a, b) => b.count - a.count);
	
	result = result.slice(0,5);
	return result;
}

//console.log(getMostCommonGenres(books))

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
