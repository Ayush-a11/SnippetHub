import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faPhone, faTerminal } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Input from '../CommonUtility/Input.jsx'

function Footer() {

	const [name,setName] =useState();
	const [feedBack, setFeedBack] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	const [email, setEmail] = useState();


  return (
	<div className="flex flex-col bg-accent w-full mt-10">

	<div className="w-1/2 flex flex-col bg-black rounded-lg text-purple-500  self-center m-4 items-center">
	<h1 className=" text-4xl  border-accent p-1 ">Write To Us</h1>		
		<form className='flex flex-col items-center'>
			<Input label="Feedback"
				   type="text"
				   style='h-40'
				   value={feedBack}
				   onChange={setFeedBack}
				   />	
			<Input label="Name"
				   type="text"
				   value={name}
				   onChange={setName}				   />
			<Input label="Phone Number"
				   type="text"
				   value={phoneNumber}
				   onChange={setPhoneNumber}
				   />
			<Input label="Email"
				   type="email"
				   value={email}
				   onChange={setEmail}
			/>	
			<button className='max-w-fit my-5 dark:bg-black border-purple-500  hover:bg-purple-500 hover:text-black border-2
		hover:border-2 hover:border-black p-1 px-2 rounded-lg' >Submit</button>
			
		</form>
	</div>
	<div className='flex justify-between'>
	<div>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl' ><FontAwesomeIcon className='' icon={faInstagram} /></button>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl' ><FontAwesomeIcon className='' icon={faLinkedin} /></button>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl' ><FontAwesomeIcon className='' icon={faGithub} /></button>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2	
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl' ><FontAwesomeIcon className='' icon={faTerminal}/></button>
	</div>
	<div className='cursor-pointer text-lg sm:text-2xl md:text-xl dark:text-gray-500 	 dark:bg-black bg-light text-gray-500 p-2 md:p-10 rounded-lg shadow-2xl' style={{align:"end"}}>
			<h1 className='cursor-pointer   ml-2 font-bold'>Contact Details</h1>
			<ul className='cursor-pointer flex  flex-col mt-2 items-start'>
				<li><FontAwesomeIcon icon={faMailBulk}/><b>Email :<span className='text-purple-500'>	aayush.dimri1@gmail.com</span></b></li>
				<li><FontAwesomeIcon icon={faPhone}/><b>Phone : <span className='text-purple-500'>+917417446111</span></b></li>
			</ul>
	</div>
	
	</div>

	<h1 className='text-purple-500'>SnippetHub CopyRight @2024 ~ Ayush Dimri</h1>



	</div>
  )
}

export default Footer