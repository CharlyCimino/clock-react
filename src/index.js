import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import './index.css';

function tick() {
	ReactDOM.render(
		<Clock />,
		document.getElementById('root')
	);
}

setInterval(tick, 1000);
