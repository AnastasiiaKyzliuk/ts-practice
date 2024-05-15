import Book from "./Book";
import ElectronicBook from "./ElectronicBook";


const physicalBook = new Book("The Picture of Dorian Gray", "Oscar Wilde", 1890);
const electronicBook = new ElectronicBook("1984", "George Orwell", 1949, "PDF");

console.log(physicalBook.getSummary());
console.log(electronicBook.getSummary());