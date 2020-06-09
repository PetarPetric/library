const openBookForm = document.getElementById('bookForm');
const openBookBtn = document.getElementById('openFormBtn');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('closeBtn');
const bookNameField = document.getElementById('bookName');
const authorNameField = document.getElementById('authorName')
const pageNum = document.getElementById('pageNumber');
const yesNo = document.getElementsByName('readBook');

let myLibrary = [];

openBookBtn.addEventListener('click', function(){
  openBookForm.style.display = 'block'; 
  bookNameField.value = '';
  authorNameField.value = '';
  pageNum.value = '';
}); 

submitBtn.addEventListener('click', function(){
  const newBook = new Book(
    bookNameField.value, 
    authorNameField.value, 
    pageNum.value,
    document.querySelector('#yesReadBook').checked  
  ) 
  openBookForm.style.display = 'none'; 
  bookNameField.value = '';
  authorNameField.value = '';
  pageNum.value = '';
  myLibrary.push(newBook);
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

