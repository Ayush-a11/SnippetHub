import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Input from '../CommonUtility/Input.jsx'

function Footer() {
	const [name, setName] = useState('');
	const [feedBack, setFeedBack] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
  
	return (
	  <div className="flex flex-col bg-background border-t border-white w-full mt-10 p-4">
	<div className="w-1/2 flex flex-col bg-secondary rounded-lg text-textColor  self-center m-4 items-center">
	<h1 className=" text-4xl   border-accent p-1 ">Write To Us</h1>		
		<form className='flex flex-col items-center'>
		
			<div className="flex space-x-2">
			<Input label="Name"
				   type="text"
				   value={name}
				   onChange={setName}				   />
			<Input label="Phone Number"
				   type="text"
				   value={phoneNumber}
				   onChange={setPhoneNumber}
				   />
			</div>
			<div>
			<Input label="Email"
				   type="email"
				   value={email}
				   onChange={setEmail}
			/>	
			</div>

			<Input label="Feedback"
				   type="text"
				   style='h-40'
				   value={feedBack}
				   onChange={setFeedBack}
				   />	
			
			
			<button className='max-w-fit my-5 dark:bg-black border-purple-500  hover:bg-purple-500 hover:text-black border-2
		hover:border-2 hover:border-black p-1 px-2 rounded-lg' >Submit</button>
			
		</form>
	</div>
  
		<div className='flex flex-wrap justify-evenly items-start text-lg mt-4 text-textColor cursor-pointer'>
		  <div className="flex flex-col items-start gap-2">
			<h2 className="font-bold">Features</h2>
			<p>Accordion</p>
			<p>Dynamic Tab</p>
			<p>Infinite Scroll</p>
			<p>Auto Typing Text</p>
			<p>Responsive Slideshow</p>
		  </div>
		  <div className="flex flex-col items-start gap-2">
			<h2 className="font-bold">Quick Links</h2>
			<p>Home</p>
			<p>Menu</p>
		  </div>
		  <div className="flex flex-col items-start gap-2">
			<h2 className="font-bold">Contact Details</h2>
			<p><FontAwesomeIcon icon={faMailBulk} /> Email: <a href="mailto:aayush.dimri1@gmail.com" className="text-purple-500">aayush.dimri1@gmail.com</a></p>
			<p><FontAwesomeIcon icon={faPhone} /> Phone: <a href="tel:+917417446111" className="text-purple-500">+917417446111</a></p>
		  </div>
		  <div className='flex gap-2'>
			{[faInstagram, faLinkedin, faGithub, faTerminal].map((icon, index) => (
			  <button key={index} className='bg-black text-purple-500 hover:bg-purple-500 hover:text-black rounded-xl px-4 p-2'>
				<FontAwesomeIcon icon={icon} />
			  </button>
			))}
		  </div>
		</div>
		<p className='text-center mt-4 text-textColor' >SnippetHub ©2024 ~ Ayush Dimri</p>
	  </div>
	);
  }
  
  export default Footer;