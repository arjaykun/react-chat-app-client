import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

const Messages = ({messages, self}) => {

	return (
		<ScrollToBottom className="messages-container">

			{
				messages.map( (m, i) => (
					<Message key={i} message={m} self={self} />
				))
			}
		</ScrollToBottom> 
		
	)
}

export default Messages;
