 import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';
import Users from './Users';

let socket;

function Chat({location}) {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const [users, setUsers] = useState([]);
	
	// localhost 
	//const ENDPOINT = 'localhost:5000';
	
	// production
	const ENDPOINT = 'https://rj-chat-app.herokuapp.com';

	useEffect( ()=> {
		const {name, room } = queryString.parse(location.search);
		socket = io(ENDPOINT);

		setName(name);
		setRoom(room);

		socket.emit('join', {name, room}, function(err) {
			if(err) {
				alert(err.message);
				window.location = '/'			
				
				return;
			}
		});

		socket.on('roomData', ({users}) => {
			setUsers(users);
		})

		return () => {
			socket.emit('disconnect');
			socket.disconnect();
		}

	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message])
		}) 
	}, [messages])
 
	const sendMessage = (e) => {
		e.preventDefault();

		if(message) {
			socket.emit('sendMessage', message, ()=> setMessage(''))
		}
	} 

	const userLeft = () => {
		socket.on('roomData', ({users}) => {
			setUsers(users);
		})
	}

  return (
  	<div className="container">
  		<div className="inner-container">
		  	<InfoBar room={room} userLeft={userLeft} />
	  		<div className="chat-box">
	  			<div className="chat-users">
	  				<Users users={users} />
	  			</div>
		  		<div className="chat-container">
		  			<Messages messages={messages} self={name} />
		  			<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
		  		</div>
	   		</div>
   		</div>
  	</div>
  );
}

export default Chat;
