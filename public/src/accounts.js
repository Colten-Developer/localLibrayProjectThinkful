// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
	//find the account by the account id
	let desiredAccount = accounts.find((account) => account.id === id);
	return desiredAccount
}

function sortAccountsByLastName(accounts) {
	//sort the accounts comparing the current and next accounts
	accounts.sort((account1, account2) => 
	//.toLowerCase as to not favor captial letters
		account1.name.last.toLowerCase() < account2.name.last.toLowerCase() ? -1 : 1);
	return accounts
}

function getTotalNumberOfBorrows(account, books) {
	let result = 0;
	//iterate through each book
  books.forEach( ( book ) => {
	  //iterate through each borrow in each book
    book.borrows.forEach( ( borrow ) => {
		//if accountID === borrowID then add 1 to the result
      if (account.id === borrow.id) {
		  result ++;
	  }
    });
  });
  //return the number of books borrowed by account
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const accountId = account.id;
  //iterate through each book
  books.forEach( ( book ) => {
    const borrows = book.borrows;
    const authorId = book.authorId;
	//iterate though each borrow inside each book
    borrows.forEach( ( borrow ) => {
		// if borrowId === accountID and the book has not been returned
       if( borrow.id === accountId && !borrow.returned ){
         authors.forEach( ( author ) => {
			 //if author provided = author we are looking at add info to book object
           if( author.id === authorId ){
             const fullInfo = {
               ...book,
               author : author 
             }
             result.push( fullInfo );
           }
         });
       }
    });
  });
  //return list of books borrowed and add author info to book
  return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};











