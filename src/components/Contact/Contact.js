import React from 'react'
import Invisitainer from './../Invisitainer/Invisitainer'
import './Contact.css'
export default function Contact() {
    return (
        <Invisitainer title="Contact Me" body={
            <section className="container">
            <div className="row">
                <div className="col-12"><h6 className="contactinfo">Email: <a href="mailto:bangerter.spencer@gmail.com">bangerter.spencer@gmail.com</a></h6></div>
                <div className="col-12"><h6 className="contactinfo">Phone: 801-702-7862 </h6></div>

            </div>
            
            <form method="POST" action="https://formspree.io/xqkklwly">
            
                <label>Name</label>
                <p></p>
                <input type="text" name="name" placeholder="Your Name"/>
                <p></p>
                <label>Email</label>
                <p></p>
                <input type="email" name="_replyto" placeholder="example@example.com"/>
                <p></p>
                <label>Message</label>
                <p></p>
                <textarea id="message" name="message" placeholder="Type message here"></textarea>
                <p></p>
                <input type="submit" id="submitBtn" value="Submit" />
            
            </form>
        </section>}>
        </Invisitainer>       
    )
}
