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


class Book {
  constructor(_title, _author, _pages, _read) {
  this.title = _title;
  this.author = _author;
  this.pages = _pages;
  if(_read == true) {
        this.read = "Read";
      } else {
        this.read = "Not read";
    }
  this.bookUpdateRead = function() {
    if(this.read === "Read") {
      this.read = "Not read"
    } else if(this.read === "Not read") {
      this.read = "Read";
    } 
    }
  }
}



function render() {
  const bookContainer = document.getElementById('bookList'); 
  bookContainer.innerHTML = '';
  for(let i = 0; i <  myLibrary.length; i++){ 
    const blocky = document.createElement('div');
    const title = document.createElement('h3');
    const author = document.createElement('h4');
    const pages = document.createElement('h5');
    const read = document.createElement('h6');
    const redOrNot = document.createElement('p')
    const delBtn = document.createElement('button');
    const toggleBtn = document.createElement('button');
    const br = document.createElement('br');

    // deleting function
    delBtn.addEventListener('click', (e) => {
    const indxNum = blocky.book_index = i;
    myLibrary.splice(indxNum, 1);
    e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    });

    // togling read
    toggleBtn.addEventListener('click', () => {
    const indxNum = blocky.book_index = i;
    let updatedLibrary = myLibrary[indxNum];
    updatedLibrary.bookUpdateRead();
    redOrNot.textContent = updatedLibrary.read
    
    }); 

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
    redOrNot.append(myLibrary[i].read);
    blocky.append(redOrNot);
    blocky.appendChild(br);
    blocky.append(delBtn);
    delBtn.classList.add('delBtns')
    delBtn.textContent = "x";
    bookContainer.append(blocky);
    blocky.dataset.book_index = i;
    blocky.append(toggleBtn);
    toggleBtn.textContent = "c"
  }
};

