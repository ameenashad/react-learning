import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: 'cream',
        fontSize: '24px'
    };
    return (
        <div className="userInput">
            <input type="text" onChange={props.change} value={props.value} style={style}/>
        </div>
    );
}

export default userInput;