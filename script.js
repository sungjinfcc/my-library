function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = "not read";
}

let myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

Book.prototype.info = function () {
  return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function readBook(book) {
  book.read == "read" ? (book.read = "not read") : (book.read = "read");
}

const myBook1 = new Book("Hobbit", "J.R.R", 295);
const myBook2 = new Book("Harry Potter", "J.K", 15);

addBookToLibrary(myBook1);
addBookToLibrary(myBook2);

readBook(myBook2);

for (const book of myLibrary) {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = `
    <div class="title">${book.title}</div>
    <div class="author">${book.author}</div>
    <div class="pages">${book.pages}</div>
    <div class="read">${book.read}</div>
  `;
  document.querySelector(".main-content").append(div);
}
