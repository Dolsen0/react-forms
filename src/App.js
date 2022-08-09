
import { useState } from 'react';
import './App.css';

function App() {

const [title,setTitle] = useState("Enter a title")
const[description, setDescription] = useState("Please describe something...anything")
const[author, setAuthor] = useState("todd")


console.log({title})
console.log({description})
console.log({author})



function formSubmit(e) {
  e.preventDefault();
  console.log("Form Submitted")
}


  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <h1>Comments</h1>

          {/* text field single line. */}

        <label>Title: </label>
        <input 
        type = "text" 
        value = {title}
        onChange={(e)=>{setTitle(e.target.value)}} 
        />
        <h3>Title: {title}</h3>



        {/* Description field */}

        <label>Description: </label>
        <textarea value = {description}
        onChange={(e)=>{setDescription(e.target.value)}}
        >Hello</textarea>

        <h3>Description: {description}</h3>



        {/* Author Section */}
        <label>Author</label>
        <select value = {author}
        onChange={(e) => {setAuthor(e.target.value)}}

        >

          <option value ="">Choose one</option>
          <option value ="todd">Todd</option>
          <option value ="ludwigson">Ludwigson</option>
        </select>

        <h3>
        Author: {author}
        </h3>



        <button>Submit Form</button>

        </form>
    </div>
  );
}

export default App;
