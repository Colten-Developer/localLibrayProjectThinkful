// Note: Please do not change the name of the functions. The tests use those names to validate your code.


function findAuthorById(authors, id) {
	let result = authors.find((author) => author.id === id);
	return result
}

function findBookById(books, id) {
	let result = books.find((book) => book.id === id);
	return result
}

function partitionBooksByBorrowedStatus(books) {
	//initalize the result to be an array with 2 empty arrays
	let result = [[],[]];
	//itterate though each book
	books.forEach((book) =>{
		//destructoring
		let borrows = book.borrows
		//if book is not returned it will be the top value
		//we only need to look at the top or 0th value of each book
		if(borrows[0].returned){
			result[1].push(book)
		}else{
			result[0].push(book)
		}
	});
	return result
}

function getBorrowersForBook(book, accounts) {
	let result = [];
	borrows = book.borrows
	borrows.forEach((borrow) => {
		accounts.forEach((account) => {
			if(account.id === borrow.id){
				account.returned = borrow.returned
				result.push(account)
			}
		});
	});
	
	
	for(let value in result){
		if(result.length > 10){
			result.pop();
		}
	}
	
	
	return result
	
}
//let book = books[0]
//console.log(getBorrowersForBook(book, accounts))


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
