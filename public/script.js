// script.js
let socket;

const connectToChat = () => {
    const name = document.getElementById('name').value.trim();
    const birthYear = parseInt(document.getElementById('birth-year').value.trim());

    if (!name || !birthYear) {
        alert('Please enter your name and birth year.');
        return;
    }

    const age = new Date().getFullYear() - birthYear;
    if (age < 13) {
        alert('You must be at least 13 years old to join the chat.');
        return;
    }

    socket = io({ query: { name } });

    document.querySelector('.container > .mb-3').style.display = 'none'; // Hide the name input field
    document.querySelector('.container > .mb-4').style.display = 'none'; // Hide the birth year input field
    document.querySelector('.container > button').style.display = 'none'; // Hide the connect button
    document.getElementById('title-site').style.display = 'block'; // Show the chat box
    document.getElementById('chat-box').style.display = 'block'; // Show the chat box
    document.getElementById('message-input').style.display = 'flex'; // Show the message input

    socket.on('message', (data) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${data.user}: ${data.message}`;
        messageElement.classList.add('message');

        if (data.user === name) {
            messageElement.classList.add('message-sender');
        } else {
            messageElement.classList.add('message-other');
        }

        document.getElementById('chat-box').appendChild(messageElement);
        document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
    });
};

const sendMessage = () => {
    const message = document.getElementById('message').value;
    if (message) {
        socket.emit('message', message);
        document.getElementById('message').value = '';
    }
};

document.getElementById('message').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('title-site').style.display = 'none';
