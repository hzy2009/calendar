import '../css/weui.css';
import '../css/style.css';
import '../css/schdule-table.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/App.js';

var $app = document.getElementById('app');
ReactDOM.render(
	<App></App>,
	$app
);