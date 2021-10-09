import { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { io } from 'socket.io-client';

const socket = io('http://localhost:8000');

const Chat = (props) => {
    // Displays a welcome message when the user initially opens the chat
    useEffect(() => {
        // addResponseMessage('Welcome to this awesome chat!');
        socket.on('receive-message', (message) => {
            addResponseMessage(message);
        });
    }, [])

    // NOTE: To send a message, use 'emit'. To listen, use 'on'.

    const handleNewUserMessage = (newMessage) => {
        // console.log(newMessage);
        socket.emit('send-message', `${window.sessionStorage.getItem('name')}: ${newMessage}`);
        // Send message to the backend API
    }

    return (
        <div className="container">
            <h1>To get started, click the chat widget on the bottom right!</h1>
            <Widget title={ `Welcome, ${window.sessionStorage.getItem('name')}!` } subtitle='Chat with friends' handleNewUserMessage={ handleNewUserMessage }  titleAvatar={ window.sessionStorage.getItem('avatar') } />
        </div>
    )
}

export default Chat;