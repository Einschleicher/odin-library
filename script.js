const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // readStatus = () => read ? "already read" : "not read yet";
    this.readStatus = () => read ? "already read" : "not read yet";

    // this.info = function() {
    //     return `${title} by ${author}, ${pages} pages, ${readStatus()}`;
    // }
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// Select table body
const bookTableBody = document.querySelector("tbody");
let bookIndex = 0;


// Add books to table
function displayLibrary() {
    for (book of myLibrary) {
        // Create table row
        const tr = document.createElement("tr");
        // Add table row
        bookTableBody.appendChild(tr);

        // Select table row
        // WRONG: Selects always the first tr in the body
        // const bookTableRow = document.querySelector("tbody tr");

        // RIGHT: Use this property instead
        const BodyLastChild = bookTableBody.lastElementChild;

        // Create table data element and fill content for each book-property
        // PROBLEM: How to access property?
        // for (let i = 0; i < 4; i++) {
        //     const td = document.createElement("td");
        //     BodyLastChild.appendChild(td);
        //     BodyLastChild.lastElementChild.textContent = book.pages;
        // }

        let index = 4;

        for (let property in book) {
            if (index === 0) break;
            const td = document.createElement("td");
            BodyLastChild.appendChild(td);
            if (property !== "read") BodyLastChild.lastElementChild.textContent = book[property];
            else BodyLastChild.lastElementChild.textContent = book.readStatus();
            index--;
        }
        const td = document.createElement("td");
        BodyLastChild.appendChild(td);
        BodyLastChild.lastElementChild.innerHTML = `<button class="delete" book-index="${bookIndex}">X</button>`;
        bookIndex++;
    }
    bookIndex = 0;
}

addBookToLibrary("Extreme Ownership: How U.S. Navy SEALs Lead and Win", "Jocko Willink, Leif Babin", 317, true);
addBookToLibrary("Can't Hurt Me: Master Your Mind and Defy the Odds", "David Goggins", 366, false);
addBookToLibrary("The Principles of Object-Oriented JavaScript", "Nicholas C. Zakas", 120, false);
console.log(myLibrary);
displayLibrary();

const addBookButton = document.querySelector("#button-add");
const formContainer = document.querySelector("#form-container");
let buttonToggle = 0;

let formHTML = `
    <ul>
    <label for="title">Title:</label>
    <li><input type="text" id="title"></li>
    <label for="author">Author:</label>
    <li><input type="text" id="author"></li>
    <label for="pages">Pages:</label>
    <li><input type="number" id="pages"></li>
    <label for="read">Status:</label>
    <li><select id="read">
        <option value="read">read</option>
        <option value="not-read">not read</option>
    </select></li>
    </ul>`;

addBookButton.addEventListener("click", () => {
    if (buttonToggle !== 1) {
        formContainer.innerHTML = formHTML;
        addBookButton.textContent = "SUBMIT FORM";
        buttonToggle = 1;
    }
    else {
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let read = document.querySelector("#read").value;
        addBookToLibrary(title, author, pages, read);
        bookTableBody.innerText = "";
        displayLibrary();
        formContainer.innerHTML = formHTML;
    }
});