APP.TSX
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import Home from './folders/Home'
import About from './folders/About'
import Services from './folders/Services'
import Contact from './folders/Contact'
import Request from './folders/Request'
import Feedback from './folders/Feedback'
import './App.css'




function App() {
  return (
    <BrowserRouter>
   
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/services">Services</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/request">Request</Link>
    <Link to="/feedback">Feedback</Link>
 
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/request" element={<Request/>}/>
    <Route path="/feedback" element={<Feedback/>}/>
   
    </Routes>
    </BrowserRouter>
  );
}


export default App



HOME.TSX
function Home(){
    return (
        <>
        <h1>Welcome to to the Student Portal</h1>




        <p>This portal allows students to access university information,
            submit book requests, and provide feedback on events. Navigate
            using the menu above to explore different pages.
        </p>
        </>


    );
}
export default Home;

ABOUT.TSX
function About(){
    return (
        <>
        <h1>About the Portal</h1>


        <p>
            The Student Portal is designed to provide an easy-to-use interface
            for students to acces university services. This portal demonstrates
            the use of Reactm TypeScript, React Router, and Bootstrap for a responsive
            and modern web application.
        </p>
        </>


    );
}
export default About;





SERVICES.TSX
function Services(){
    return(
        <>
            <h1>Services</h1>


            <ul>
                <li>Book Request Submission</li>
                <li>Event Feedback Submission</li>
                <li>Access University Event Information</li>
                <li>Explore Academic Resources</li>
               
            </ul>
        </>
    );


}
export default Services;

CONTACTS.TSX
function Contact(){
    return(
        <>
        <h1>Contact Us</h1>
        <p>Email: support@university.edu</p>
        <p>Phone: +63 912 345 6789</p>
        <p>Address: 123 University Ave, City, Philippines</p>
       
        </>
    )
}
export default Contact;









REQUEST.TSX
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";


interface FeedbackData {
  name: string;
  id: string;
  book: string;
  author: string;
  reason: string;
 
}


function Request() {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [book, setBook] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const data: FeedbackData = { name, id, book, author, reason };
    setSubmittedData(data);


    setName("");
    setId("");
    setBook("");
    setAuthor("");
    setReason("");
  };


  return (
    <>
      <h2>Book Request Form (Controlled)</h2>


      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>


        <br />


        <div>
          <label>Student ID:</label><br />
          <input
            type="text"
            value={id}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setId(e.target.value)
            }
          />
        </div>


        <br />


        <div>
          <label>Book Title:</label><br />
          <input
            type="text"
            value={book}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBook(e.target.value)
            }
          />
        </div>


        <br />


        <div>
          <label>Author:</label><br />
          <input
            type="text"
            value={author}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAuthor(e.target.value)
            }
          />
        </div>


        <br />


        <div>
          <label>Reason:</label><br />
          <textarea
            value={reason}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setReason(e.target.value)
            }
          />
        </div>


        <br />


        <button type="submit">Submit Controlled Form</button>
      </form>


      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Feedback</h3>
          <p>{submittedData.name} {submittedData.id} requested "{submittedData.book}" by {submittedData.author}. Reason: {submittedData.reason}</p>


        </div>
      )}
    </>
  );
}
export default Request;
FEEDBACK.TSX
import { useState, useRef } from "react";
import type{ FormEvent } from "react";


interface FeedbackData {
  name: string;
  course: string;
  feedback: string;
}


function Feedback() {
  const nameRef = useRef<HTMLInputElement>(null);
  const courseRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);
  const [submittedData, setSubmittedData] = useState<FeedbackData | null>(null);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (nameRef.current && courseRef.current && feedbackRef.current) {
      const data: FeedbackData = {
        name: nameRef.current.value,
        course: courseRef.current.value,
        feedback: feedbackRef.current.value,
      };


      setSubmittedData(data);


      console.log("Uncontrolled Form Data:", data);
    }
  };


  return (
    <>
      <h2>Uncontrolled Form</h2>


      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" ref={nameRef} />
        </div>


        <br />


        <div>
          <label>Course:</label><br />
          <input type="text" ref={courseRef} />
        </div>


        <br />


        <div>
          <label>Feedback:</label><br />
          <textarea ref={feedbackRef} />
        </div>


        <br />


        <button type="submit">Submit Uncontrolled Form</button>
      </form>


      {/* ✅ THIS WAS MISSING */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Feedback</h3>
          <p>
            {submittedData.name} | {submittedData.course} | {submittedData.feedback}
          </p>
        </div>
      )}
    </>
  );
}


export default Feedback;

HOME
Welcome to the Student Portal, your central hub for accessing important academic resources, university updates, and student services. This platform is designed to make your student experience more convenient, efficient, and organized by bringing everything you need into one place.
Through this portal, students can easily access university announcements, check important schedules, and stay informed about the latest campus events. Whether you need information about classes, deadlines, or institutional updates, everything is just a few clicks away.
The portal also provides a streamlined system for submitting book requests. Students can request library materials, track their requests, and manage their academic resources without the need to visit the library physically. This feature helps ensure that you have the materials you need for your studies in a timely manner.
In addition, you can participate in giving feedback on university events and activities. Your input is valuable in helping improve future programs and ensuring that the university continues to meet the needs and expectations of its students.
Use the navigation menu above to explore different sections of the portal. Each section is designed to support your academic journey and provide easy access to essential tools and information. We encourage you to regularly check the portal to stay updated and make the most out of the available features.
Thank you for being part of the university community. We hope this portal enhances your overall learning experience and helps you stay connected with campus life.


STUDENT PORTAL
The Student Portal is designed to provide an easy-to-use and centralized interface for students to access a wide range of university services. It serves as a one-stop platform where students can conveniently manage their academic activities, stay updated with university announcements, and interact with essential campus resources.
This portal is built using modern web development technologies, including React, TypeScript, React Router, and Bootstrap. These tools work together to create a fast, scalable, and responsive web application. React enables the creation of reusable components, while TypeScript adds strong typing to improve code reliability and maintainability. React Router allows seamless navigation between different pages without reloading the application, providing a smooth user experience.
Bootstrap is used to ensure that the design is responsive and visually consistent across different devices, including desktops, tablets, and mobile phones. This ensures that students can access the portal anytime and anywhere with ease.
The portal is designed with usability and accessibility in mind, allowing students to quickly find the information they need without unnecessary complexity. Features are organized in a clear and structured manner, making navigation intuitive even for first-time users.
Overall, the Student Portal demonstrates how modern technologies can be combined to create a powerful and efficient web application that enhances communication, simplifies access to services, and improves the overall student experience.

