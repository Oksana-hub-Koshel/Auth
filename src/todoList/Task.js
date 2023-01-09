import React from 'react';

const Task = ({task, deleteItem, id, completed, complete}) => {
    return (
        <div style={{display:"flex", gap: 10, alignItems: "center", justifyContent:"center"}}>
            <h1 style={{color: complete ? "green" : "black"}}>{task}</h1>

            <button onClick={() => completed(id)}>V</button>
            <button onClick={() => deleteItem(id)}>X</button>

        </div>
    );
};

export default Task;