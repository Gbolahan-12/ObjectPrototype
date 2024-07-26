class Book {
    constructor(title, author, isbn) {
         this.title = title;
         this.author = author;
         this.isbn = isbn;

    }
}

class UI {
    addToBookList(book) {

 const list = document.getElementById('book-list');
// create a tr element
  const row = document.createElement('tr');
// insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>

  `;

  list.appendChild(row);
    }

    showAlert(message,className ) {
        // Create div
 const div = document.createElement('div');
 // Add className
 div.className = `alert ${className}`
 // Add textNode
 div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');

  const form = document.querySelector('#book-form');
// Insert Alert
  container.insertBefore(div, form);

  // Time out after 3 sec
  setTimeout(function(){
   document.querySelector('.alert').remove();
  }, 3000);


    }
     
    deleteBook(target) {
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
           }
    }
    clearField() {

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
    }
}

// local Store Class
class  Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

 static displayBooks() {
  const books = Store.getBooks();

  books.forEach(function(book){
    const ui = new UI;

    // Add book tp UI
    ui.addToBookList(book)
  })

  }
  
 static addBook(book) {
  const books = Store.getBooks();

  books.push(book);

  localStorage.setItem('books', JSON.stringify(books))

  }

 static removeBook(isbn) {
  const books = Store.getBooks();

  books.forEach(function(book, index){
    if(book.isbn === isbn) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem('books', JSON.stringify(books))

  }


}

document.addEventListener('DOMContentLoaded', Store.displayBooks())

document.getElementById('book-form').addEventListener('submit', 
    function(e){
      const title = document.getElementById('title').value,
            author = document.getElementById('author').value, 
            isbn = document.getElementById('isbn').value
  
  
      const book = new Book(title, author, isbn);
      
      const ui = new UI();
  
      // valiidate
      if(title === '' || author === '' || isbn === '') {
        // Errow message
        ui.showAlert('Please fill in all fields ', 'error');
      } else {
        // Add book to list
        ui.addToBookList(book);

        // Add to LS
        Store.addBook(book)
  
        // show succes
        ui.showAlert('Book Added!', 'success')
  // Clear field
        ui.clearField()
      
        
      }
  
      e.preventDefault();
  });
  
  // Event listner for delete
  
  document.getElementById('book-list').addEventListener('click', function(e){
  
    const ui = new UI();
  
    ui.deleteBook(e.target);

    // Romove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    
    ui.showAlert('Book Removed!', 'success');
  
  e.preventDefault();
  });
  