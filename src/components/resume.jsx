import { useState } from 'react'

function Resume() {
  
    const [resume, setResume] = useState({firstname: 'Firstname', lastname: 'Lastname', email: 'abc@xyz.com', phone: '123-456-7890', school: 'Adonis University', title: 'PhD in Gender Studies', date: '2006-2012', company: 'Adonis University', position: 'Senior Lecturer',
        description: 'Delivered 42 hours of quality weekly lecture content to a diverse audience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', empdate: '2018-2024'});

    const [current, setCurrent] = useState({firstname: 'Firstname', lastname: 'Lastname', email: 'abc@xyz.com', phone: '123-456-7890', school: 'Adonis University', title: 'PhD in Gender Studies', date: '2006-2012', company: 'Adonis University', position: 'Senior Lecturer',
    description: 'Delivered 42 hours of quality weekly lecture content to a diverse audience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', empdate: '2018-2024'});

    function handleChange(e) {
        let temp = current;
        temp[e.target.id] = e.target.value;
        setCurrent(temp);
    }
    function handleSubmit() {
        let temp = current;
        setResume(temp);
    }
    return (
        <div className='main'>
            <div className='input'>
                <h1>Input</h1>
                <h2>General</h2>
                <div className="inputs general">
                        <label htmlFor='firstname'>First Name </label>
                        <input type='text' id='firstname' placeholder='Firstname' onChange={handleChange}></input><br/>
                        <label htmlFor='lastname'>Last Name </label>
                        <input type='text' id='lastname'  placeholder='Lastname' onChange={handleChange}></input><br/>
                        <label htmlFor='email'>Email </label>
                        <input type='email' id='email' placeholder='abc@xyz.com' onChange={handleChange}></input><br/>
                        <label htmlFor='phone'>Phone </label>
                        <input type='text' id='phone' placeholder='123-456-7890' onChange={handleChange}></input>
                </div>
                <h2>Education</h2>
                <div className="education general">
                        <label htmlFor='school'>School </label>
                        <input type='text' id='school' placeholder='Adonis University' onChange={handleChange}></input><br/>
                        <label htmlFor='title'>Title of Study </label>
                        <input type='text' id='title' placeholder='PhD in Gender Studies' onChange={handleChange}></input><br/>
                        <label htmlFor='date'>Date </label>
                        <input type='text' id='date' placeholder='2006-2012' onChange={handleChange}></input><br/>
                </div> 
                <h2>Experience</h2>
                <div className="experience general">
                        <label htmlFor='company'>Company </label>
                        <input type='text' id='company' placeholder='Adonis University' onChange={handleChange}></input><br/>
                        <label htmlFor='position'>Position </label>
                        <input type='text' id='position' placeholder='Senior Lecturer' onChange={handleChange}></input><br/>
                        <label htmlFor='description'>Description </label>
                        <input type='text' id='description' placeholder='Delivered 42 hours of quality weekly lecture content to a diverse audience. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                         onChange={handleChange}></input><br/>
                        <label htmlFor='empdate'>Employment Date </label>
                        <input type='text' id='empdate' placeholder='2018-2024' onChange={handleChange}></input><br/>
                        <button type='submit' onClick={handleSubmit}>Submit!</button>
                </div> 
            </div>
            <div className='output'>
                <h1>Output</h1>
                <h2>{resume.firstname} {' '} {resume.lastname}</h2>
                <hr/>
                <h2>Contact Info:</h2>
                <h3>{resume.email} </h3>
                <h3>{resume.phone}</h3>
                <hr/>
                <h2>Education:</h2>
                <h3>{resume.title} {' '} at {' '} {resume.school} {' ('} {resume.date} {')'}</h3>
                <hr/>
                <h2>Latest Work Experience:</h2>
                <h3>{resume.position} {' '} at {' '} {resume.company} {' ('} {resume.empdate} {')'}</h3>
                <p>{resume.description}</p>
            </div>
        </div>
    )
  }
  
  export default Resume;