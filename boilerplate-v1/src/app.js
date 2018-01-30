import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css/normalize.css'
import './styles/styles.scss';

const Layout = () => {
    return (
        <div>
            <p>header</p>
            <p>footer</p>
        </div>
    )
}

ReactDOM.render(<p>this is my boilerplate</p>, document.getElementById('app'));

