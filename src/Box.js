// import React from "react";
// import './Box.css';

// import { FaHtml5 } from "react-icons/fa";




// const Box = () => {
//     return (  
//         <div className="hardness">
//             <h2 className="header3" >HARDNESS THE POWER OF MAKENOW</h2>
//             <h6 className="para2">and unlock potential</h6>
       
//             <p className="para3">We are introducing a new approach to answering the question  "What should I learn and how?"</p>
//             <p className="para4">Put an end to uncertainty with power of data analytics, real-time reporting and data forecasting.</p>

            
//             <div className="courses-offered">
//                 <h2>Courses Offered </h2>
//                 <div className="offers">
                    
//                     <Course  title="GET DIGITAL DNA" description="or professional genome"  icon={<FaHtml5/>}/>
//                     <Course title="LEARN NEW SKILLS" description="upskilling + reskilling"/>
//                     <Course title="GET CONNECTED" description="to talent, jobs or courses"/>
                    
//                 </div>
//             </div>
//         </div>
//     );
// }

// function Course({icon,title, description} ) {
//     return(
//         <div className="course">
//             <div className="icon">{icon}</div>
//             <h3>{title}</h3>
//             <p>{description}</p>
//         </div>
//     )
// }
 
// export default Box;



import React from "react";
import './Box.css';


import { FaHtml5, FaCss3  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Box = () => {
    return (  
        <div className="outer">
        <div className="hardness">
            <h2 className="header3">HARDNESS THE POWER OF MAKENOW</h2>
            <h6 className="para2">and unlock potential</h6>
       
            <h6 className="para3">We are introducing a new approach to answering the question  "What should I learn and how?"</h6>
            <h6 className="para4">Put an end to uncertainty with power of data analytics, real-time reporting and data forecasting.</h6>

            <div className="courses-offered">
                <h3 className="para5">Courses Offered</h3>
                {/* <div className="offers">
                  
            
                    <Course title="GET DIGITAL DNA" description="or professional genome" icon={<FaHtml5 size={47} />} />
                    <Course title="LEARN NEW SKILLS" description="upskilling + reskilling" icon={<FaCss3 size={47} />} /> 
                    <Course title="GET CONNECTED" description="to talent, jobs or courses" icon={<IoLogoJavascript size={47} />} />                     
                </div> */}
                <div className="offers1">
                <div className="course1">
            <div className="icon6"><FaHtml5 size={45} /></div>
            <div className="course-details1">
            <h3> GET DIGITAL DNA </h3>
            <p>or professional genome</p>
        </div>
        
        </div>
        <div className="course1">
            <div className="icon6"><FaCss3 size={40} /></div>
            <div className="course-details1">
            <h3>LEARN NEW SKILLS </h3>
            <p>upskilling + reskilling</p>
        </div>
        
        </div>
        <div className="course1">
            <div className="icon6"><IoLogoJavascript size={40} /></div>
            <div className="course-details1">
            <h3> GET CONNECTED</h3>
            <p>to talent, jobs or courses</p>
        </div>
        
        </div>

                </div>
            </div>
        </div>
        </div>
    );
}

function Course({ icon, title, description }) {
    return (
        <div className="course">
            <div className="icon">{icon}</div>
            <div className="course-details">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </div>
    );
}

export default Box;
