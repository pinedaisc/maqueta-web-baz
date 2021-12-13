import React, {Fragment}from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ url, size = 45 }) => {
	if(url){
		return <img 
			className="avatar-rounded" 
			src={url} 
			alt="Avatar"
			style={{ width: size, height: size }}
		/>
	}
	
	return <Fragment/>;
}

Avatar.propTypes = {
	url: PropTypes.string.isRequired,
	size: PropTypes.number,
}

export default Avatar;