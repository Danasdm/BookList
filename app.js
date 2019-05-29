// Book Constructor
function Book(title, author, isbn) {
this.title = title
this.author = author;
this.isbn = isbn;

}

// UI Constructor - add book to list, add alert - etc
function UI(){}

//Add Book to List
UI.prototype.addBookToList = function(book){
const list = document.getElementById('book-list');
// Create tr element
const row = document.createElement('tr');
//Insert cols
row.innerHTML = `
  <td>${book.title} </td>
  <td>${book.author} </td>
  <td>${book.isbn} </td>
  <td><a href="#" class="delete">X<a></td>
`;
list.appendChild(row);
}

//Show Alert
UI.prototype.showAlert = function(message, className) {
  //Create div
  const div = document.createElement('div');
  //Add classes
  div.className = `alert ${className}`;
  //Add Text
  div.appendChild(document.createTextNode(message));
  //Get Parent
  const container = document.querySelector('.container');
  //Get Form
  const form = document.querySelector('#book-form');
  //Insert alert
  container.insertBefore(div, form);

  //Timeout after 3 secs
  setTimeout(function(){
    document.querySelector('.alert')
    .remove();

  }, 3000);

}

//Clear Fields
UI.prototype.clearfields = function(){
document.getElementById('title').value = '';
document.getElementById('author').value = '';
document.getElementById('isbn').value = '';

};

// Event Listeners
document.getElementById('book-form').addEventListener('submit', 
function(e){
  //Get form values
  const title = document.getElementById('title').value, 
        author = document.getElementById('author').value, 
        isbn = document.getElementById('isbn').value
      
    //Instantiate Book
  const book = new Book (title, author, isbn);
   
  //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn ===''){
      // Error alert
      ui.showAlert('Please fill in all fields', 'error');
    } else {
    //Add Book to list
    ui.addBookToList(book);

    //Clear Fields
    ui.clearfields();
  
 
    //Show Sucess
   ui.showAlert('Book Added!', 'success')


  }
  e.preventDefault();
});