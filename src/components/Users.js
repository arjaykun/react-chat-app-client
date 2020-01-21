import React from 'react';
import User from './User';

const Users = ({users}) => {
	return (
		<div className="users-container">
			<h3>User List</h3>
			<hr />
			{
				users.map( user => (
					<User key={user.id} user={user} />
				))
			}
		</div>
	)
}

export default Users;
