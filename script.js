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

// const HarryPotter1 = new Book("Harry Potter: Erstes Buch", "Chrissi Rowling", 254, false);
// console.log(HarryPotter1.info());