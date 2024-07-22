// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}



function UI(){

}

document.getElementById('book-form').addEventListener('submit', 
    function(e){
    const title = document.getElementById('title').value,
           author = document.getElementById('author').value,
           isbn = document.getElementById('isbn').value

// instantiate book
        const book = new Book(title, author, isbn);
    
    console.log(book);
   e.preventDefault();        
});
// UI Constructor