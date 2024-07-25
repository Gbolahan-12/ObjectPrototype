// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

function UI() {}

UI.prototype.addToBookList = function(book) {
  const list = document.getElementById('book-list');

  const row = document.createElement('tr');

  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>

  `;

  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className){
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

UI.prototype.clearField = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
document.getElementById('isbn').value = '';

};
UI.prototype.removeBookList = function(target){  
   if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
   }


}



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

  ui.removeBookList(e.target);
j
  ui.showAlert('Book Removed!', 'success');

e.preventDefault();
});
