import React, { useEffect, useState } from 'react'
import Input from '../CommonUtility/Input'
import LoginGif from '../../assets/Login.gif'
import '../../../src/index.css'
import { Link,useNavigate  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Login() {
    
	const [togglePass, setTogglePass] =useState();
	const [userName,setUserName] =useState();
	const [password,setPassword] = useState();

	const navigate =useNavigate(false);
	const handleForm=(e)=>{
		e.preventDefault();	
	}

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
	<div className="modal-container flex dark:text-textColor dark:bg-background bg-light text-black justify-center my-10 border-2 border-purple-500 shadow-2xl rounded-2xl">
		<div className="bg-accent w-full mx-10 my-10 py-4 ">
			<h1 className="text-3xl my-2 text-purple-500 font-bold">Login</h1>
		<div className="w-full flex justify-around">
		<div className='w-full mx-2'>
			<img className="w-full " src={LoginGif} />
		</div>
		<div className=" flex flex-col items-center justify-evenly mx-2 ">
		<form className='relative '>
			<Input label='UserName'
				   type="text"
				   value={userName}
				   onChange={setUserName}
				   />
			<Input label='Password'
				   type={togglePass?"text":"password"}
				   value={password}
				   onChange={setPassword}
				   />
			
		<button type='button'><FontAwesomeIcon onClick={()=>setTogglePass((prev)=>!prev)} className='cursor-pointer text-lg relative bottom-6 left-32  ' icon={togglePass?faEye:faEyeSlash}/>
		</button>
		<Link to='/SignUp'> 	<h2 className="text-purple-500 my-2">don't have an account? SignUp</h2> </Link>   
		<button className='max-w-fit my-5 dark:bg-black border-purple-500  text-textColor hover:bg-purple-500 hover:text-purple-500 border-2
		hover:border-2 hover:border-black p-1 px-2 rounded-lg'onClick={(e)=>handleForm(e)} >Submit</button>
		</form>
		</div>
		</div>
		</div>
		<FontAwesomeIcon onClick={closeModal} className='text-purple-500 text-2xl hover:scale-150 duration-300 cursor-pointer m-2 ' icon={faClose}/>

	</div>
	</>
  )
}

export default Login