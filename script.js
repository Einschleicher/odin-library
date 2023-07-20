const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    readStatus = () => read ? "already read" : "not read yet";

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${readStatus()}`;
    }
}

userInputTitle = "test-t";
userInputAuthor = "test-a";
userInputPages = 123;
userInputRead = false;

function addBookToLibrary() {
    const book = new Book(userInputTitle, userInputAuthor, userInputPages, userInputRead);
    myLibrary.push(book);
}

// const bookTable = document.querySelector("#books-table");

// function displayLibrary() {
//     for (book of myLibrary) {
//         bookTable.textContent = "LOL";
//     }
// }

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
console.log(myLibrary);
// displayLibrary();