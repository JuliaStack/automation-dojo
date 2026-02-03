//1 - Object creation, 2 - Adding new properties to the object, 4 - Adding nested objects
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "Fiction",
  isAvailable: true,
  authorProfile: {
    email: "fitzgerald@example.com",
    tel: "+1-555-123-4567",
    birthYear: 1896,
  },
};

//3 - Function to get book information
function getBookInfo(book: {
  title: string;
  author: string;
  year: number;
  genre: string;
  isAvailable: boolean;
  authorProfile: {
    email: string;
    tel: string;
    birthYear: number;
  };
}): string {
  return `${book.title} by ${book.author}, published in ${book.year} - Genre: ${book.genre} - Available: ${book.isAvailable ? "Yes" : "No"}. If you want to contact the author, you can email them at ${book.authorProfile.email} or call them at ${book.authorProfile.tel}.`;
}

console.log(getBookInfo(book));

/*export function printObject(obj: unknown): void {
  if (typeof obj !== "object" || obj === null) {
    throw new Error("Input is not an object");
  }

  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}:`, value);
  }
}
return printObject(book);
*/

//5 - check if the object has a specific property
function isAuthorProfileHasProperty(book: {
  authorProfile?: {
    role?: string;
  };
}): boolean {
  return "role" in (book.authorProfile ?? {});
  false;
}
console.log(isAuthorProfileHasProperty(book));

//6 - count the number of properties in the book object
function countBookProperties(book: object): number {
  return Object.keys(book).length;
}
console.log(countBookProperties(book));

//6.1 - count all properties in the book object, including nested ones
function countAllProperties(obj: unknown): number {
  if (typeof obj !== "object" || obj === null) {
    return 0;
  }

  let count = 0;

  for (const value of Object.values(obj)) {
    count += 1;

    if (typeof value === "object" && value !== null) {
      count += countAllProperties(value);
    }
  }

  return count;
}
console.log(countAllProperties(book));

//7 - copying an object to a new variable
const copyBook = { ...book };
copyBook.title = "1984";
console.log(copyBook.title);
console.log(book.title);

//8 - return an array of the object's property values
function getBookProperties(book: object): unknown[] {
  return Object.values(book);
}
console.log(getBookProperties(book));
