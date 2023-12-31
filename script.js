const rooms = [];
const bookings = [];

// Get the list of available rooms from local storage.
if (localStorage.getItem("rooms")) {
    rooms = JSON.parse(localStorage.getItem("rooms"));
}

// Get the user's bookings from local storage.
if (localStorage.getItem("bookings")) {
    bookings = JSON.parse(localStorage.getItem("bookings"));
}

// Fill the list of available rooms.
const roomsList = document.getElementById("rooms-list");
for (const room of rooms) {
    const li = document.createElement("li");
    li.textContent = room.name;
    roomsList.appendChild(li);
}

// Fill the list of user's bookings.
const bookingsList = document.getElementById("bookings-list");
for (const booking of bookings) {
    const li = document.createElement("li");
    li.textContent = `${booking.room} - ${booking.start_time} - ${booking.end_time}`;
    bookingsList.appendChild(li);
}

// Book a room.
const bookRoomForm = document.getElementById("book-room");

bookRoomForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the selected room.
    const selectRoom = document.querySelector("select[name=room]");
    const room = selectRoom.value;
    if (!room) {
        alert("Please select a room.");
        return;
    }

    // Get the start time.
    const start_time = document.querySelector("input[name=start-time]");
    if (!start_time.value) {
        alert("Please select a start time.");
        return;
    }

    // Get the end time.
    const end_time = document.querySelector("input[name=end-time]");
    if (!end_time.value) {
        alert("Please select an end time.");
        return;
    }

    // Validate the time slot.
    if (start_time.value >= end_time.value) {
        alert("The end time must be after the start time.");
        return;
    }

    // Get the list of viable rooms.
    const viableRooms = [];
    for (const room of rooms) {
        if (!isRoomBooked(room, start_time.value, end_time.value)) {
            viableRooms.push(room);
        }
    }

    // Update the select box with the list of viable rooms.
    const selectRoom = document.querySelector("select[name=room]");
    selectRoom.innerHTML = "";
    for (const room of viableRooms) {
        const option = document.createElement("option");
        option.value = room.name;
        option.textContent = room.name;
        selectRoom.appendChild(option);
    }
});

// Check if a room is booked.
function isRoomBooked(room, start_time, end_time) {
    for (const booking of bookings) {
        if (booking.room === room && booking.start_time === start_time && booking.end_time === end_time) {
            return true;
        }
    }
    return false;
}
