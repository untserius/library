const myLibrary = [];

function book(title, author, year, pages, isRead) {
	this.title = title;
	this.author = author;
	this.year = year;
	this.pages = pages;
	this.isRead = isRead;
}

//function to open the modal dialog
const openModalButton = document.getElementById("openModal");
const bookForm = document.getElementById("bookForm");
const closeModalButton = document.getElementById("closeModal");

openModalButton.addEventListener("click", () => {
	bookForm.showModal();
});

closeModalButton.addEventListener("click", () => {
	bookForm.close();
});

// Function to add a new book to the library
const newBookForm = document.getElementById("newBookForm");
newBookForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const title = document.getElementById("title").value;
	const author = document.getElementById("author").value;
	const year = document.getElementById("year").value;
	const pages = document.getElementById("pages").value;
	const isRead = document.getElementById("isRead").checked;

	const newBook = new book(title, author, year, pages, isRead);

	myLibrary.push(newBook);

	alert(`${title} by ${author} - book has been added to the library.`);

	// Clear the form fields
	newBookForm.reset();

	// Close the modal
	bookForm.close();

	// Display the updated library
	displayBooks();
});

function displayBooks() {
	const content = document.querySelector(".content");
	content.innerHTML = "";

	//loop through the array to create books entries
	myLibrary.forEach((book, index) => {
		const card = document.createElement("div");
		card.classList.add("card");

		const cardClass = book.isRead ? "read" : "unread";
		card.classList.add(cardClass);

		card.innerHTML = `
			<h2>${book.title}</h2>
			<p><strong>Author:</strong> ${book.author}</p>
			<p><strong>Year:</strong> ${book.year}</p>
			<p><strong>Pages:</strong> ${book.pages}</p>
			<p class = "toggle"><strong>Read:</strong>
			<label class="switch">
          	<input type="checkbox" ${
							book.isRead ? "checked" : ""
						} onchange="toggleReadStatus(${index})">
          	<span class="slider round"></span>
        	</label>
			</p>
			<button onclick="removeBook(${index})"><i class="ri-close-line"></i></button>
			`;

		content.appendChild(card);
	});
}

// Function to remove a book from the library
function removeBook(index) {
	if (confirm("Are you sure you want to remove this book?")) {
		myLibrary.splice(index, 1);
		displayBooks();
	}
}

function toggleReadStatus(index) {
	myLibrary[index].isRead = !myLibrary[index].isRead;
	displayBooks(); // Update the display to reflect the new status
}
