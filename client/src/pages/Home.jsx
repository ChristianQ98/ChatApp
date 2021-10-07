import { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { io } from 'socket.io-client';
import logo from '../logo.svg';
const socket = io('http://localhost:8000');

const Home = (props) => {
    // Displays a welcome message when the user initially opens the chat
    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
        socket.on('receive-message', (message) => {
            addResponseMessage(message);
        });
    }, [])

    // NOTE: To send a message, use 'emit'. To listen, use 'on'.

    const handleNewUserMessage = (newMessage) => {
        // console.log(newMessage);
        socket.emit('send-message', newMessage);
        // Send message to the backend API
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center p-5 display-1">Home Page</h1>
            </div>
            <hr/>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, tempore dolore minima nihil voluptatem blanditiis maxime vitae deserunt libero iste.</p>

            <Widget title='Welcome!' subtitle='Chat with friends' handleNewUserMessage={ handleNewUserMessage } profileAvatar={ logo }/>
        </div>
    )
}

export default Home;