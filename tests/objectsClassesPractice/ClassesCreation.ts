//1 - Classes creation for Book objects - modern way
class Book {
  title: string;
  author: string;
  yearPublished: number;
  genre: string;
  publisher: string = "Ababagalamaga";

  constructor(
    title: string,
    author: string,
    yearPublished: number,
    genre: string,
  ) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genre = genre;
  }

  reading() {
    console.log("Reading " + this.title + " by " + this.author);
  }

  wantToRead() {
    console.log("I want to read " + this.title + " by " + this.author);
  }
}

const book3 = new Book("1984", "George Orwell", 1948, "Dystopian Fiction");
const book4 = new Book("Pride and Prejudice", "Jane Austen", 1813, "Romance");

console.log(book3.author);
console.log(book3);
console.log(book4);
book3.wantToRead();
book4.reading();

//2 - Constructor creation for Book objects - outdated way
function BookObsolete(
  title: string,
  author: string,
  yearPublished: number,
  genre: string,
) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genre = genre;

  this.reading = function () {
    console.log("Reading " + this.title + " by " + this.author);
  };

  this.wantToRead = function () {
    console.log("I want to read " + this.title + " by " + this.author);
  };
}
const book1 = new BookObsolete(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "Fiction",
);

const book2 = new BookObsolete(
  "To Kill a Mockingbird",
  "Harper Lee",
  1960,
  "Fiction",
);

console.log(book1);
console.log(book2);
book1.wantToRead();
book2.reading();
