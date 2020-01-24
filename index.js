import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { Store } from "./components/store/state";
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
ReactDOM.render( <Provider store={ Store }><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
