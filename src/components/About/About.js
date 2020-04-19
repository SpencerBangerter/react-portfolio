import React from 'react'
import img from '../../images/bio.jpg'
import './About.css'
import Invisitainer from '../Invisitainer/Invisitainer'
export default function About() {
    
    return (
        <Invisitainer title="About Me" body={
            <div className="row">
                <div className="col-sm-12">
                    <img className="img-fluid float-left" id= 'bioImage' src={img} alt="Bio"/>
                    
                    <p>My name is Spencer Bangerter. I currently work as a Junior Developer at CBC Mortgage Agency, a mortgage firm providing down payment assistance loans to borrowers needing assistance with home ownership. I help maintain and develop new features in our custom loan management software using Javascript and HTML. I have 1.5 years of experience in this position, and am always looking to learn more. </p>
                    <p>I started programming here after building out 2 of the departments and managing them. I am always working to become the best I can with my current opportunities, and love helping people along the way. I love being a developer because I love the process of making something work, and the thrill of the breakthrough when you are stuck on something.</p>
                    <p>I currently attend the University of Utah's Coding Bootcamp to further my knowledge of software development.</p>
                    <p>Outside of work I enjoy hiking, backpacking, camping, hunting, and fishing. Pretty much anything with the outdoors I enjoy doing with my border collie, Apollo</p>
                    <p>My wife and I are the lucky parents to a wonderful little girl.</p>
                    <p>I'm from South Jordan, UT, and am currently living in Herriman, UT. Contact me if you would like to discuss anything!</p>
                    
                </div>
            </div>     
        }>
        </Invisitainer>       
    )
}
