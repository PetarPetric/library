const openBookForm = document.getElementById('bookForm');
const openBookBtn = document.getElementById('openFormBtn');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('closeBtn');
const bookNameField = document.getElementById('bookName');
const authorNameField = document.getElementById('authorName')
const pageNum = document.getElementById('pageNumber');

let myLibrary = [];
const newBook = new Book('Smth', 'asadsada', 333, false);

openBookBtn.addEventListener('click', function(){
  openBookForm.style.display = 'block'; 
  bookNameField.value = '';
  authorNameField.value = '';
  pageNum.value = '';
}); 

cancelBtn.addEventListener('click', function(){
  openBookForm.style.display = 'none';
})


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if(read == true) {
    this.read = "Read";
  } else {
    this.read = "Not read";
  }
}

function addBookToLibrary() {
  myLibrary.push(newBook); // adds book to myLibrary array
}

addBookToLibrary();
