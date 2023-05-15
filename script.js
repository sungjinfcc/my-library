function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = isRead;
}
let myLibrary = [];

const addButton = document.querySelector(".add");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const submitButton = document.querySelector(".submit");
const mainContent = document.querySelector(".main-content");
const addBookForm = document.getElementById("addBook");

addButton.addEventListener("click", showModal);
overlay.addEventListener("click", closeModal);
submitButton.addEventListener("click", addBookToLibrary);

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

function toggleRead(e) {
  const title = e.target.parentNode.firstChild.innerText;
  for (const book of myLibrary) {
    if (book.title == title) {
      book.read = !book.read;
    }
  }
  updateGrid();
}

function removeFromLibrary(e) {
  const title = e.target.parentNode.firstChild.innerText;
  for (const book of myLibrary) {
    if (book.title == title) {
      const index = myLibrary.indexOf(book);
      myLibrary.splice(index, 1);
    }
  }
  updateGrid();
}

function updateGrid() {
  mainContent.innerHTML = "";
  for (const book of myLibrary) {
    const container = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("button");
    const remove = document.createElement("button");

    container.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");
    remove.classList.add("remove");

    title.innerText = book.title;
    author.innerText = book.author;
    pages.innerText = book.pages;
    read.innerText = book.read == true ? "Read" : "Unread";
    remove.innerText = "Remove";

    container.append(title);
    container.append(author);
    container.append(pages);
    container.append(read);
    container.append(remove);

    mainContent.append(container);

    const readButtons = document.querySelectorAll(".read");
    readButtons.forEach((item) => item.addEventListener("click", toggleRead));
    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach((item) =>
      item.addEventListener("click", removeFromLibrary)
    );
  }
}

function showModal() {
  addBookForm.reset();
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
