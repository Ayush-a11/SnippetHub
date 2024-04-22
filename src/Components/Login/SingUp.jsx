import React, { useState,useEffect } from 'react'
import Input from '../CommonUtility/Input'
import LoginGif from '../../assets/Login.gif'
import '../../../src/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { Link,useNavigate  } from 'react-router-dom'
function SingUp() {

	const [userName,setUserName] =useState();
	const [password,setPassword] = useState();
	const [firstName,setFirstName] = useState();
	const [lastName,setLastName] = useState();
	const [email,setEmail] = useState();
	const [page,setPage] = useState(1);
	const [otp,setOtp] = useState()

	const handleForm=(e)=>{
		e.preventDefault();	
	} 

	const NextPage = (e)=>{
		e.preventDefault();

		if(userName && firstName && lastName && email){
			setPage(prev=>prev+1)
		}
		else{
			console.log('error')
		}

	}
	const navigate =useNavigate();	

	useEffect(()=>{
		document.body.style.overflowY='hidden';

		return()=>{
			document.body.style.overflowY='scroll';

		}
	})

	const closeModal=()=>{
		navigate("/");
	}


  return (
	<>
	<div className="modal"></div>
	<div className="modal-container flex dark:text-textColor dark:bg-background bg-light text-black justify-center my-10 ">
		<div className="bg-accent  w-full mx-10 my-10 py-4 ">
			<h1 className="text-3xl my-2 text-purple-500 font-bold">SignUp</h1>
		<div className="w-full flex justify-around">
		<div className='w-full mx-2'>
			<img className="w-full " src={LoginGif} />
		</div>
		<div className=" flex flex-col items-center justify-evenly mx-2 ">
		<form className='relative '>

		{page==1?
			<>
			<Input label='firstName'
				   type="text"
				   value={firstName}
				   onChange={setFirstName}
				   />
			<Input label='LastName'
			type="text"
			value={lastName}
			onChange={setLastName}
			/>
			<Input label='UserName'
				   type="text"
				   value={userName}
				   onChange={setUserName}
				   />
			<Input label='Email'
				   type="email"
				   value={email}
				   onChange={setEmail}
				   />
		<Link to='/Login'>	<h2 className="text-purple-500 my-2">Already an account? Login</h2>		   
		</Link>
		<button type='button' className='max-w-fit my-5 dark:bg-black border-purple-500  text-textColor hover:bg-purple-500 hover:text-purple-500 border-2
		hover:border-2 hover:border-black p-1 px-2 rounded-lg'onClick={(e)=>NextPage(e)} >Next</button>

			</>
			:
			<>

			<Input label='OTP'
				   type="number"
				   value={otp}
				   onChange={setOtp}
				   />
			<Input label='Password'
				   type="password"
				   value={password}
				   onChange={setPassword}
				   />
			<h2 className="text-purple-500 my-2">Already an account? Login</h2>		   
		
		<div className="flex  justify-evenly">
		<button className='max-w-fit my-5 dark:bg-black border-purple-500  text-textColor hover:bg-purple-500 hover:text-purple-500 border-2
		hover:border-2 hover:border-black p-1 px-2 rounded-lg'onClick={(e)=>setPage((prev)=>prev-1)} >Prev</button>

		<button className='max-w-fit my-5 dark:bg-black border-purple-500  text-textColor hover:bg-purple-500 hover:text-purple-500 border-2
		hover:border-2 hover:border-black p-1 px-2 rounded-lg'onClick={(e)=>handleForm(e)} >Submit</button>
		</div>
			</>
			}
				</form>
		</div>
		</div>
		</div>
		<FontAwesomeIcon onClick={closeModal} className='text-purple-500 text-2xl hover:scale-150 duration-300 cursor-pointer m-2 ' icon={faClose}/>

	</div>
	
	</>
  )
}

export default SingUp