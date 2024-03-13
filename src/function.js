import React from 'react'
import image from "./WhatsApp_Image_2023-12-02_at_17.47.21_1122c722-removebg-preview.png"
import link from "./linkedin_4494497.png"
 import facebook from './facebook_4494475.png'
 import twitter from  './twitter_4494477.png'
 
function FunctionComponent() {

 
    return(
        <>
        <div className='BUTTON'>
        
        <button type="button" className="btn1"><span className='NI'>NI</span>SHEK.</button>
        <button type="button" className="btn2">HOME</button>
        <button type="button" className="btn3"><a href=''>ABOUT</a></button>
        <button type="button" className="btn4">PORTFOLIO</button>
        <button type="button" className="btn5">BLOG</button>
        <button type="button" className="btn6">CONTACT</button>
        <button type="button" className="btn7">Let's Talk</button>
        </div>
    <div className="main">
        <h1>HI i'm <span id="nishek">NISHEK </span></h1>
        <h2>DESIGN ENGINEER</h2>
            <p>
            Highly skilled and motivated mechanical engineer 
            with a solid<br />background in analyzing,
             and manufacturing mechanical systems.<br /> Seeking a
              challenging position in a dynamic organization
               where <br />I can utilize my technical expertise and 
               problem-solving skills <br />to contribute to the growth
                and success of the company. </p>
               
                <div className="BUTTON1">
                <button type="button"     className="btn8">Hire Me</button>
                <button type="button" className="btn9">see projects</button>
                </div>
                <div className='logo'>
                  <a href=' www.linkedin.com/in/abishek-sk-96365a224' >  <img src={link}   className='link'   alt="sry"/> </a>
                     <img src={facebook} className='facebook' alt="sry"/>
                      <img src={twitter} className='twitter'   alt="sry"/>  
                 </div>
 </div>
                <img src={image} className="nishek"   alt='bye'/>
        </>
     )
        

    
}



export default FunctionComponent