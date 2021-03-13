import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";
import messages_en from "./translations/en.json";
import CssBaseline from '@material-ui/core/CssBaseline';

const messages = {
    'en': messages_en,
    'he': messages_en,
};
const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
    <>
        <CssBaseline />
        <IntlProvider locale='en' messages={messages[language]} defaultLocale="en">
            <App/>
        </IntlProvider>
    </>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
