import { useState } from "react"

export function CreateTodo(){
    const [tittle,setTittle]=useState("");
    const [description,setDescription]= useState("");
    return (
        <div>
    <input type="text" placeholder="title" onChange={ function(e){
         const value = e.target.value;
         setTittle(e.target.value);
    } }></input>  <br/>
    <input type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value)
    }}></input>  <br/>

    <button onClick={()=>{
         fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(async function(res) {
                const json = await res.json();
                alert("Todo added");
            })
    }}> Add a todo</button>
        </div>
    )
}