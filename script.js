var selectedSeat = null;
var availableSeats = 12;
var bookedSeats = 0;

function selectSeat(id) {
  // check if seat is available
  if (document.getElementById(id).classList.contains("available")) {
    // remove selected class from any previously selected seat
    if (selectedSeat != null) {
      document.getElementById(selectedSeat).classList.remove("selected");
    }
    // add selected class to the new selected seat
    document.getElementById(id).classList.add("selected");
    // update selectedSeat variable
    selectedSeat = id;
    // show message
    document.getElementById("message").textContent = "";
  } else {
    // show message if seat is already booked
    document.getElementById("message").textContent =
      "This seat has already been booked.";
  }
}

function confirmSeat() {
  // check if a seat has been selected
  if (selectedSeat != null) {
    // mark selected seat as booked
    document.getElementById(selectedSeat).classList.remove("available");
    document.getElementById(selectedSeat).classList.add("booked");
    // update available and booked seat counts
    availableSeats--;
    bookedSeats++;
    document.getElementById("availableSeats").textContent = availableSeats;
    document.getElementById("bookedSeats").textContent = bookedSeats;
    // clear selectedSeat variable and message
    selectedSeat = null;
    document.getElementById("message").textContent = "";
  } else {
    // show message if no seat has been selected
    document.getElementById("message").textContent =
      "Please select a seat to book.";
  }
}
