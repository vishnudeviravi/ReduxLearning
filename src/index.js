import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import ReduxProvider from './ReduxProvider'

ReactDOM.render(<ReduxProvider><App /></ReduxProvider>, document.querySelector('#root'));

