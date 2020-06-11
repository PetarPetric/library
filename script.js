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
  openBookBtn.style.display = 'none';
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
  openBookBtn.style.display = 'inline-block';
  myLibrary.push(newBook);
  render();
});


cancelBtn.addEventListener('click', function(){
  openBookForm.style.display = 'none';
  openBookBtn.style.display = 'inline-block';
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

function render() {
  const bookContainer = document.getElementById('bookList'); 
  bookContainer.innerHTML = '';
  for(let i = 0; i<  myLibrary.length; i++){ 
    const blocky = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('h4');
    const pages = document.createElement('h5');
    const read = document.createElement('h6');
    const delBtn = document.createElement('button')
    const br = document.createElement('br')

    blocky.classList.add('booksy');
    blocky.append(title);
    title.textContent = "Title:";
    blocky.append(myLibrary[i].title);
    blocky.append(author);
    author.textContent = "Author:"
    blocky.append(myLibrary[i].author);
    blocky.appendChild(pages);
    pages.textContent = "Number of pages:";
    blocky.append(myLibrary[i].pages);
    blocky.appendChild(read);
    read.textContent = "Have you read it?";
    blocky.append(myLibrary[i].read);
    blocky.appendChild(br);
    blocky.append(delBtn);
    delBtn.classList.add('delBtns')
    delBtn.textContent = "x";
    bookContainer.append(blocky);
    blocky.dataset.book_index = i;
  }
};

