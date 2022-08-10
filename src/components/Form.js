import { useState, useEffect } from "react";
import About from "../pages/About";

export default function Form(){
        const [formSubmitted, setFormSubmitted] = useState(false);
        const [validForm, setValidForm] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");
        const [form, setForm] = useState({});
      
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("your description");
        const [author, setAuthor] = useState("todd albert");
      
        useEffect(() => {
          //fetch stuff
          if (form?.title?.length > 3 && form?.description?.length > 10) {
            setValidForm(true);
          } else {
            setValidForm(false);
          }
        }, [title, description, author]);
      
        // console.log(title)
      
        //const formSubmit = async (e) => {
      
        async function formSubmit(e) {
          e.preventDefault();
      
          if (!validForm) {
            setErrorMessage("Not a valid form");
            return;
          }
      
          try {
            //console.log("form submitted")
      
            // const comment = {
            //     title:title,
            //     description:description,
            //     author:author,
            // }
            const comment = {
              title,
              description,
              author,
            };
      
            console.log("form submitted with ", comment);
      
            // really submit it to an api
            const results = await fetch("https://sql.bocacode.com/comments", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(comment),
            });
            console.log(results);
            const data = await results.json();
            console.log(data);
      
            setFormSubmitted(true);
            setErrorMessage("");
            setValidForm(true);
            alert("Wow! Submitted");
          } catch (error) {
            console.error(error);
            setErrorMessage(
              "there was an error submitting your comment" + error.toString()
            );
          }
        }
      
          console.log(`this is a form: `, form)
      
          const updateForm = (event) => {
            setForm({...form, [event.target.name]: event.target.value})
          }
      
      
      
        return (
          <div className="App">
            
            <form onSubmit={formSubmit}>
        
              <h1>Comments</h1>
      
              {/* here goes the title */}
              <label>Title</label>
              <input
                type="text"
                name="title"
                // required
                value={form.title}
                onChange = {updateForm}
              
              />
              <h3>{form.title}</h3>
      
                  <span></span>
      
              {/* this is the description */}
              <label>Description</label>
              <textarea
                value={form.description}
                name= "description"
                required
                onChange={updateForm}
              />
      
              <h3>{description}</h3>
      
              {/* THIS IS THE AUTHOR */}
              <label>Author</label>
              <select
                value={form.author}
                onChange={updateForm}
              >
                <option value="" selected>
                  Choose One
                </option>
                <option value="todd albert">Doctor Todd</option>
                <option value="ludwigson">Ludwigson</option>
                <option value="other">Other</option>
              </select>
              <h3>{author}</h3>
      
              {!formSubmitted && <button>Submit Form</button>}
      
              {errorMessage && (
                <h1>
                  There was an error:
                  <br />
                  {errorMessage}
                </h1>
              )}
            </form>
          </div>
        );
      }
