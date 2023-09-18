const myLibrary = [];

function book(title, author, year, pages) {
	this.title = title;
	this.author = author;
	this.year = year;
	this.pages = pages;
	// this.isRead = isRead
	// this.status = function () {
	//     const readStatus = this.isRead ? 'Read' : 'Not read yet';
	//     return readStatus;
	// }
}

function addBookToLibrary() {
	const title = prompt("Enter the title of the book:");
	const author = prompt("Enter the author of the book:");
	const year = prompt("Enter the publication year of the book:");
	const pages = prompt("Enter no. of pages in the book:");

	const newBook = new book(title, author, year, pages);

	myLibrary.push(newBook);

	alert(`${title} by ${author} - book has been added to the library.`);
}

function displayBooks() {
	const content = document.querySelector(".content");
	//lo0p through the array to create books entries
	myLibrary.forEach((book) => {
		const card = document.createElement("div");
		card.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong>${book.author}</p>
            <p><strong>Year:</strong>${book.year}</p>
            <p><strong>Pages:</strong>${book.pages}</p>
            `;

		content.appendChild(card);
	});

	// document.body.appendChild(table);
}

addBookToLibrary();

console.log("Library contents:");
console.table(myLibrary);

displayBooks();
