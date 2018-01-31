import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (

    <div>
        <h1>This is Portfolio</h1>
        <div>
        <ul>
            <li><Link to="/portfolio/1">Item1</Link></li>
            <li><Link to="/portfolio/2">Item2</Link></li>
            <li><Link to="/portfolio/3">Item3</Link></li>
        </ul>
        </div>
    </div>
)



export default Portfolio;