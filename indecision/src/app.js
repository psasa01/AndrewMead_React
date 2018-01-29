import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = () => {
    return (
        <div>
            <p>header</p>
            <p>footer</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

