import React from 'react'
import Me from './me.png'
import email from './email.png'
import leetcode from './leetcode.png'
function Card() {
    return(
        <div className="card">
            <img src={Me} alt="photo" className='me'  />
            <h1>Vivek Singh</h1>
            <h2 className='role'>Junior Frontend Developer</h2>
            <h3>Freelancer</h3>
            <div className='button-container'>
                <button className="email" id='email' onClick={email1}><img src={email} alt="logo-email" />Email</button>
                <button className="leetcode" id="leetcode" onClick={leetcode1}><img src={leetcode} alt="logo-leetcode" />Leetcode</button>
            </div>
            <h2>About</h2>
            <p>Hello! I'm a second-year B.Tech student at VIT Chennai, 
                specializing in Computer Science Engineering with a focus on 
                Artificial Intelligence and Machine Learning. My passion lies in web development,
                and I'm eager to explore the world of freelancing to apply my skills 
                and gain practical experience.</p>
            <h2>Interests</h2>
            <p>
                Web development, Block-chain(Web3), Artificial Intelligence, Machine Learning
                Music, Sports and Chess
            </p>
        </div>
    )
}
function email1() {
    window.open("mailto:<EMAIL>");
}
function leetcode1() {
    window.open("https://leetcode.com/vivek_121/");
}
export default Card;