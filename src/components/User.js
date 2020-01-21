import React from 'react';

const User = ({user}) => {
	return (
		<div className="user-box">
			- {user.name}
		</div>
	)
}

export default User;
