class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

const books = new Map();
const bookList = [];

const createBook = (title, author, id) => {
  const existingBook = books.has(id);

  if (existingBook) {
    return books.get(id);
  }

  const book = new Book(title, author, id);
  books.set(id, book);

  return book;
};

const addBook = (title, author, id, country, sales) => {
  const book = {
    ...createBook(title, author, id),
    sales,
    country,
    id,
  };

  bookList.push(book);
  return book;
};

addBook('Harry Potter', 'Rowling', 'AB123', 'US', 11);
addBook('Harry Potter', 'Rowling', 'AB123', 'US', 50);
addBook('Childhood Memories', 'ION CREANGA', 'CD345', 'RO', 10);
addBook('Childhood Memories', 'ION CREANGA', 'CD345', 'RO', 20);
addBook('Bio', 'Mihai Eminescu', 'EF567', 'RO', 20);

console.log('Total amount of copies: ', bookList.length);
console.log('Total amount of books: ', books.size);
console.log('--------------');
console.log(books);
console.log('--------------');
console.log(bookList);
