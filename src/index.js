import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './cardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'
import { aliens } from './aliens';

ReactDOM.render(
			<CardList aliens = {aliens}/>
	, document.getElementById('root'));
registerServiceWorker();
