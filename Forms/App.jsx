import React,{useState} from "react";

function App() {

  const [name,setName]=useState("");

  function handleChange(event){
    console.log(event.target.value);
    setName(event.target.value)

  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input onChange={handleChange} type="text" value={name} placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
