import React from 'react';

const Option = (props) => (
    <div>
        {props.optionText}
        <button 
        onClick={(e) => {
            props.handleDeleteOptionSingular(props.optionText)
        }}>Delete</button>
    </div>
)


export default Option;