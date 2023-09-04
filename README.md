# Meeting Room Booking System

This is a simple web application for booking meeting rooms within a workday. It allows users to view available rooms, book rooms for specific time slots, view their bookings, edit or cancel bookings, and handles conflicts to prevent double-booking.

## Features

### Display Available Rooms

- List all available meeting rooms with unique names or identifiers.
- Users can view the current booking status for each room.

### Booking a Room

- Users can select a room and choose a time slot to book it.
- Time slots are in increments of 30 minutes (e.g., 9:00-9:30, 9:30-10:00...).
- Once booked, the time slot becomes unavailable for that specific room.

### Viewing Bookings

- Users can view all of their current bookings.
- The view displays the room name and the booked time slot.

### Editing and Canceling Bookings

- Users have the option to modify the time or cancel their booking.
- Once a booking is canceled, the time slot becomes available for others.

### Conflict Handling

- The system does not allow double-booking of rooms.
- If a user tries to book a room that's already reserved for a specific time slot, they are alerted.

## Technical Requirements

- The frontend is user-friendly and responsive.
- You can use any frontend framework or library of your choice or stick to vanilla JavaScript, HTML, and CSS.
- You can use browser's local storage or a mock JSON file for a simplified backend.

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/Akarsh-Sharat/MiniBookingSystemForMeetingRooms.git
```

2. **Open the project directory in your code editor.**

3. **Mock JSON File Setup:**
   - If you are using a simple mock JSON file for the backend, ensure that it is correctly set up with room data and bookings.

4. **Open the `index.html` File:**
   - Open the `index.html` file in your web browser or set up a local development server if you are using a frontend framework.

5. **Start Using the Meeting Room Booking System.**

## Usage

- When you open the application, you will see a list of available meeting rooms along with their booking status.

- To book a room, follow these steps:
   1. Select a room.
   2. Choose a time slot.
   3. Click on the "Book" button.

- To view your bookings, click on the "My Bookings" button. Here, you can also edit or cancel your bookings.

- The system will prevent double-booking and alert you if a room is already booked for a specific time slot.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and commit them.

4. Push your changes to your fork.

5. Submit a pull request to the main repository.

## Acknowledgments

This project was inspired by the need for a simple meeting room booking system for small teams or organizations.

