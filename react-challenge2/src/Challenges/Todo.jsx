import React, {useEffect, useState, useRef} from 'react'
import {Link} from 'react-router-dom'


export default function ToDo({chore, setChore}) {
    const input = useRef(null);
    function makeTask(e){
        e.preventDefault();
        const items = [...chore];
        items.push(input.current.value)
        console.log(input.current.value)
        setChore(items)
    }
    function eraseTask(i){
        const items = [ ...chore];
        items.splice(i,1)
        setChore(items)
    }
    function newTask(i,updatedTask){
        const items = [...chore];
        items.splice(i,1,updatedTask)
        setChore(items)
    }
    return (
    <div>
        <form onSubmit={(e)=>makeTask(e)}>
            <input type="text" ref={input}/>
            <button type="submit">Create</button>
        </form>
        {chore.map((item,index) => (
        <div key={index}>
        <Link to={`/Task/${index}`}><p>{item}</p></Link>
        <button onClick={()=>eraseTask(index)}>Delete</button>
        <button onClick={()=>newTask(index,prompt('please enter another task'))}>Change</button>
        </div>
        ))}
    </div>
)
}