import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Join() {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
  	<div className="container">
  		<div className="login-container">
        <h1>Join Room</h1>
        <hr/>
        <input 
          ref={inputRef}
          className="login-input mt-20"
          type="text" 
          onChange={e => setName(e.target.value)} 
          placeholder="Name"  
          value={name} /> <br />
        <input 
          className="login-input"
          type="text" 
          onChange={e => setRoom(e.target.value)} 
          placeholder="Room" 
          value={room} /> <br />

        <Link to={`/chat?name=${name}&room=${room}`}>
          <button className="login-btn">Sign in</button>
        </Link>
      </div>
  	</div>
  );
}

export default Join;
