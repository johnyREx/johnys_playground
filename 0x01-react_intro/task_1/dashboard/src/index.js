import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications  from './Notifications';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
		<Notifications />
	</React.StrictMode>,
	document.getElementById('root')
);

ReactDOM.render(
	<React.StrictMode>
		<Notifications />
	</React.StrictMode>,
	document.getElementById('root-notifications')
);