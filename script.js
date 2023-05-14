function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead ? "Read" : "Unread";
}

const addButton = document.querySelector(".add");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const submitButton = document.querySelector(".submit");
const mainContent = document.querySelector(".main-content");

addButton.addEventListener("click", showModal);
overlay.addEventListener("click", closeModal);
submitButton.addEventListener("click", addBookToLibrary);

function logConsole(e) {
  console.log(e);
}

let myLibrary = [];

function addBookToLibrary(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;
  let book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
  updateGrid();
  closeModal();
}

Book.prototype.info = function () {
  return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

Book.prototype.toggleRead = function () {
  this.read == "Read" ? (this.read = "Unread") : (this.read = "Read");
};

const myBook1 = new Book("Hobbit", "J.R.R", 295);
const myBook2 = new Book("Harry Potter", "J.K", 15);

function updateGrid() {
  mainContent.innerHTML = "";
  for (const book of myLibrary) {
    const div = document.createElement("div");
    div.setAttribute("class", "card");
    div.innerHTML = `
          <div class="title">${book.title}</div>
          <div class="author">${book.author}</div>
          <div class="pages">${book.pages}</div>
          <button class="read">${book.read}</button>
          <button class="remove">Remove</button>
        `;
    mainContent.append(div);
  }
}

function showModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

updateGrid();
