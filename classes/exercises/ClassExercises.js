// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate, isbn, numPages, numCheckouts, discarded) {
        this.title = title,
        this.author = author,
        this.copyrightDate = copyrightDate,
        this.isbn = isbn,
        this.numPages = numPages,
        this.numCheckouts = numCheckouts,
        this.discarded = discarded
    }
    checkout(uses=1) {
        this.numCheckouts += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor (title, author, copyrightDate, isbn, numPages, numCheckouts, discarded) {
        super(title, author, copyrightDate, isbn, numPages, numCheckouts, discarded);
    }

    discard(currentYear) {
        if (this.copyrightDate < (currentYear-5)) {
        this.discarded = "Yes";
        }
    }
}

class Novel extends Book {
    constructor (title, author, copyrightDate, isbn, numPages, numCheckouts, discarded) {
        super(title, author, copyrightDate, isbn, numPages, numCheckouts, discarded);
    }

    discard() {
        if (this.numCheckouts > 100 && this.discarded !== "Yes") {
           return this.discarded = "Yes";
        }
    }
}
// Declare the objects for exercises 2 and 3 here:

let book1 = new Novel ("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");
let book2 = new Manual ("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:
// console.log(book2);
book2.discard(2023);
// console.log(book2);
// console.log(book1);
book1.checkout(5);
book1.discard();
// console.log(book1);
