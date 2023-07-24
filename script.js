const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.readStatus = () => read ? "already read" : "not read yet";
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// Select table body
const bookTableBody = document.querySelector("tbody");
// Init variable to track amount of books
let bookIndex = 0;

// Display books in library
function displayLibrary() {
    for (book of myLibrary) {
        // Create table row
        const tr = document.createElement("tr");
        // Append table row
        bookTableBody.appendChild(tr);

        // Select last table row
        const BodyLastChild = bookTableBody.lastElementChild;

        // No of properties of a book to display in the table
        let index = 4;

        // Create table data element and fill content for each book-property
        for (let property in book) {
            // Exit loop for status, switch and delete
            if (index === 0) break;

            // Create and append table data
            const td = document.createElement("td");
            BodyLastChild.appendChild(td);

            // Add property content
            if (property !== "read") BodyLastChild.lastElementChild.textContent = book[property];
            // Add readStatus()
            else BodyLastChild.lastElementChild.textContent = book.readStatus();
            
            index--;
        }
        
        const td = document.createElement("td");
        BodyLastChild.appendChild(td);
        BodyLastChild.lastElementChild.innerHTML = `<button class="delete" book-index="${bookIndex}">X</button>`;
        bookIndex++;
    }
    bookIndex = 0;

    const deleteBookButtons = document.querySelectorAll(".delete");

    deleteBookButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            myLibrary.splice(button.getAttribute("book-index"), 1);
            bookTableBody.innerText = "";
            displayLibrary();
        })
    })
}

addBookToLibrary("Extreme Ownership: How U.S. Navy SEALs Lead and Win", "Jocko Willink, Leif Babin", 317, true);
addBookToLibrary("Can't Hurt Me: Master Your Mind and Defy the Odds", "David Goggins", 366, false);
addBookToLibrary("The Principles of Object-Oriented JavaScript", "Nicholas C. Zakas", 120, false);

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



