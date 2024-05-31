import { useState } from 'react'

function Test() {
    // <h1 style={{color: 'red'}}>Hello World!</h1>
  
    const [resume, setResume] = useState({firstname: '', lastname: '', email: '', phone: ''});
    return (
        <div className='main'>
            <div className='input'>
                <h1>Input</h1>
                <h2>General</h2>
                <div className="inputs general">
                        <label htmlFor='firstname'>First Name </label>
                        <input type='text' id='firstname'></input><br/>
                        <label htmlFor='lastname'>Last Name </label>
                        <input type='text' id='lastname'></input><br/>
                        <label htmlFor='email'>Email </label>
                        <input type='email' id='email'></input><br/>
                        <label htmlFor='phone'>Phone </label>
                        <input type='number' id='phone'></input>
                </div>
                <h2>Education</h2>
                <div className="education general">
                        <label htmlFor='school'>School </label>
                        <input type='text' id='school'></input><br/>
                        <label htmlFor='title'>Title of Study </label>
                        <input type='text' id='title'></input><br/>
                        <label htmlFor='date'>Date </label>
                        <input type='text' id='date'></input><br/>
                </div> 
                <h2>Experience</h2>
                <div className="experience general">
                        <label htmlFor='company'>Company </label>
                        <input type='text' id='company'></input><br/>
                        <label htmlFor='position'>Position </label>
                        <input type='text' id='title'></input><br/>
                        <label htmlFor='description'>Description </label>
                        <input type='text' id='description'></input><br/>
                        <label htmlFor='empdate'>Employment Date </label>
                        <input type='text' id='empdate'></input><br/>
                        <button type='submit'>Submit!</button>
                </div> 
            </div>
            <div className='output'>
                <h1>Output</h1>
            </div>
        </div>
    )
  }
  
  export default Test;