import React from 'react';


const PortfolioItem = (props) => (
    <div>
        <h1>This is item with id: {props.match.params.id}</h1>
    </div>
)

export default PortfolioItem;