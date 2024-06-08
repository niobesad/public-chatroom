# Public Chat Room

This is a simple public chat room application built with Node.js, Express, and Socket.IO. Users can join the chat room by entering their name and birth year. Users must be at least 13 years old to join the chat.

## Features

- Real-time messaging with Socket.IO
- Age restriction to ensure users are at least 13 years old
- Dynamic message display with different styles for the sender and other users
- Simple, responsive UI using Bootstrap

## Prerequisites

- Node.js (version 14.x or later)
- npm (Node package manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/niobesad/public-chatroom
    cd public-chatroom
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the server:
    ```bash
    npm start
    ```

4. Open a browser and navigate to `http://localhost:3000`.

## Usage

1. Open a browser and navigate to `http://localhost:3000`.
2. Enter your name and birth year, then click "Connect".
3. If you are at least 13 years old, you will join the chat room.
4. Type messages in the input field and press Enter or click the "Send" button to send messages.

## Code Overview

### Server-side

- `server.js`: Sets up the Express server, serves static files, and initializes Socket.IO.
- `services/service.js`: Contains the Socket.IO setup and event handling.

### Client-side

- `public/index.html`: The main HTML file with the chat interface.
- `public/styles.css`: The CSS file for styling the chat interface.
- `public/script.js`: The JavaScript file for handling client-side logic and Socket.IO communication.

## License

This project is licensed under the MIT License.

