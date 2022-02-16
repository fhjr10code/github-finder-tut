// Tools
import React from 'react';

const Alert = ({ alerts }) => {
  
	return (
		alerts !== null && (
			<div>
				<i className='fas fa-info-circle'></i> {alerts.msg}
			</div>
		)
	);
};

export default Alert;
