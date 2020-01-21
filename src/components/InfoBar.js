import React from 'react';
import { Link } from 'react-router-dom';

const InfoBar = ({room, userLeft}) => {
	return (
		<div className="info-bar">
			<div><h3>Room - {room}</h3></div>
			<div><Link to="/" className="info-close" onClick={userLeft}> go back </Link></div>
		</div>
	)
}

export default InfoBar;
