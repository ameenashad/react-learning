import React from 'react';
const userOutput = (props) => {
    return (
        <div>
            <p>Hi! My username is {props.username}</p>
            <p>I am 26 years old</p>
        </div>
    );
}

export default userOutput;