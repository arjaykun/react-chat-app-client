import React from 'react';
import ReactEmoji from 'react-emoji';

const Messages = ({message: {user, text}, self}) => {
	const isSelf = (user === self.trim().toLowerCase());
 	const isAdmin = user === 'admin';

	return (
		<div className={`${isSelf ? 'flex-end' : 'flex-start'}`}>
			<div className="message">
				<p className='flex-start ml-20' style={{fontSize:'0.8em'}}>{isSelf? '' :user}</p>
				<div className={`message-box ${isAdmin? 'admin-color' : isSelf? 'self-color' : ''}`}>
					{ReactEmoji.emojify(text)}
				</div>
			</div>
		</div>
	)
}

export default Messages;
