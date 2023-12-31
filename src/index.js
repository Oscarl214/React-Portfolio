import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'; // Importing the Tailwind CSS file
import { Ripple,initTE} from 'tw-elements';

initTE({ Ripple });


ReactDOM.render(<App />, document.getElementById('root'));
