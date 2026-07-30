// Library Management System (20 Marks)
// A school library keeps a list of available books.
// Requirements:
// Create an array containing at least 8 book names.
// Ask the user to choose one of the following options:
// Issue Book
// Return Book
// Search Book
// Show All Books
// If the user selects Issue Book:
// Ask for the book name.
// Search the array.
// If found, remove it from the array.
// Display "Book Issued Successfully".
// Otherwise display "Book Not Available".
// If the user selects Return Book:
// Ask for the book name.
// Add it to the library.
// If the user selects Search Book:
// Display whether the book exists.
// If the user selects Show All Books:
// Display every available book using a loop.



let libraryBooks = [
    "The Hobbit",
    "Harry Potter",
    "To Kill a Mockingbird",
    "The Great Gatsby",
    "1984",
    "The Catcher in the Rye",
    "Brave New World",
    "The Alchemist"
];

function librarySystem() {
    let choice = prompt(
        "Welcome to the School Library!\n" +
        "Choose an option:\n" +
        "1. Issue Book\n" +
        "2. Return Book\n" +
        "3. Search Book\n" +
        "4. Show All Books"
    );

    if (choice === "1" || choice.toLowerCase() === "issue book") {
        let bookToIssue = prompt("Enter the name of the book to issue:");
        let index = libraryBooks.indexOf(bookToIssue);

        if (index !== -1) {
            libraryBooks.splice(index, 1);
            alert("Book Issued Successfully");
        } else {
            alert("Book Not Available");
        }

    } else if (choice === "2" || choice.toLowerCase() === "return book") {
        let bookToReturn = prompt("Enter the name of the book to return:");
        libraryBooks.push(bookToReturn);
        alert("Book Returned Successfully");

    } else if (choice === "3" || choice.toLowerCase() === "search book") {
        let bookToSearch = prompt("Enter the name of the book to search:");
        let exists = libraryBooks.includes(bookToSearch);

        if (exists) {
            alert("Yes, this book exists in the library.");
        } else {
            alert("No, this book does not exist in the library.");
        }

    } else if (choice === "4" || choice.toLowerCase() === "show all books") {
        if (libraryBooks.length === 0) {
            alert("The library is currently empty.");
        } else {
            let bookList = "Available Books:\n";
            for (let i = 0; i < libraryBooks.length; i++) {
                bookList += (i + 1) + ". " + libraryBooks[i] + "\n";
            }
            alert(bookList);
        }

    } else {
        alert("Invalid option selected.");
    }
}

librarySystem();
