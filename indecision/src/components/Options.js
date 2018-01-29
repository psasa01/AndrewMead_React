import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        {
            props.options.map((option) => 
                <Option 
                    key={option}
                    optionText={option}
                    handleDeleteOptionSingular={props.handleDeleteOptionSingular}
                />
            )
        }
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option!</p>}
    </div>
)


export default Options;


