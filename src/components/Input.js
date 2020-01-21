import React from 'react';

const Input = ({message,setMessage,sendMessage}) => {
	return (
		<div className="input-container">
			
			<input 
				className="input-input"
	  			type="text" 
	  			value={message}
	  			placeholder="type your message here..."
	  			onChange={e => setMessage(e.target.value)}
	  			onKeyPress={e => e.key === "Enter" ? sendMessage(e): null}
	  		/>
			<button className="input-button" onClick={sendMessage}>
				send
			</button>
		</div>
	)
}

export default Input;
