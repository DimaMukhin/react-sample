import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1pm solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

    return (
        <div>
            <button onClick={props.clicked} style={style}>Click Me</button>
        </div>
    );
};

export default cockpit;