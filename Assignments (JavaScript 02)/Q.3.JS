// School Bus Management System (20 Marks)

// A school bus has 15 seats.

// Requirements:
// Store seat numbers in an array.
// Ask the user to choose one of the following:
// Book Seat
// Cancel Booking
// Show Available Seats
// If booking:
// Ask for the seat number.
// If available, remove it from the available seats and add it to a booked seats array.
// Otherwise display "Seat Already Booked."
// If cancelling:
// Ask for the seat number.
// Remove it from the booked seats array.
// Add it back to the available seats array.
// Display the updated list of available and booked seats.


let availableSeats = [];
for (let i = 1; i <= 15; i++) {
    availableSeats.push(i);
}
let bookedSeats = [];

let choice = prompt("1. Book Seat\n2. Cancel Booking\n3. Show Available Seats");

if (choice === "1") {
    let seatToBook = parseInt(prompt("Enter seat number (1-15):"));
    let index = availableSeats.indexOf(seatToBook);

    if (index !== -1) {
        availableSeats.splice(index, 1);
        bookedSeats.push(seatToBook);
        
        let availableString = "";
        for (let i = 0; i < availableSeats.length; i++) {
            availableString += availableSeats[i] + " ";
        }
        
        let bookedString = "";
        for (let i = 0; i < bookedSeats.length; i++) {
            bookedString += bookedSeats[i] + " ";
        }
        
        alert("Seat Booked!\nAvailable: " + availableString + "\nBooked: " + bookedString);
    } else {
        alert("Seat Already Booked.");
    }
} 

if (choice === "2") {
    let seatToCancel = parseInt(prompt("Enter seat number to cancel:"));
    let index = bookedSeats.indexOf(seatToCancel);

    if (index !== -1) {
        bookedSeats.splice(index, 1);
        availableSeats.push(seatToCancel);
        availableSeats.sort((a, b) => a - b);
        
        let availableString = "";
        for (let i = 0; i < availableSeats.length; i++) {
            availableString += availableSeats[i] + " ";
        }
        
        let bookedString = "";
        for (let i = 0; i < bookedSeats.length; i++) {
            bookedString += bookedSeats[i] + " ";
        }
        
        alert("Booking Cancelled!\nAvailable: " + availableString + "\nBooked: " + bookedString);
    } else {
        alert("This seat is not booked.");
    }
} 

if (choice === "3") {
    let availableString = "";
    for (let i = 0; i < availableSeats.length; i++) {
        availableString += availableSeats[i] + " ";
    }
    alert("Available Seats: " + availableString);
}
