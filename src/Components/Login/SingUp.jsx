import React, { useState,useEffect } from 'react'
import Input from '../CommonUtility/Input'
import LoginGif from '../../assets/BgLogin.gif'
import '../../../src/index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { Link,useNavigate  } from 'react-router-dom'
import authObj from '../../appWrite/AuthUtils';
import { ID } from 'appwrite';
function SingUp() {

	// const navigate=useNavigate();
	const [page,setPage] = useState(1);
	const [togglePass, setTogglePass] =useState();

	const [inputField,setInputField] = useState({
		password:{
				value:'',
				error:''
			},
		firstName:{
			value:'',
			error:''
		},
		lastName:{
			value:'',
			error:''
		},
		email:{
			value:'',
			error:''
		},
		otp:{
			value:'',
			error:''
		},error:''
});

const handleForm=async(e)=>{
	e.preventDefault();	

	console.log(inputField)
	
	if(inputField.otp.value=='' || inputField.otp.value== undefined || inputField.otp.value==null){
	  inputField.otp.error='otp canno\'t be empty!';

	  setInputField((prev)=>({...prev,username:{...prev["otp"],error:'otp canno\'t be empty!'}}))
	}
	else{
		setInputField((prev)=>({...prev,"otp":{...prev["otp"],error:''}}))

	}
	if(inputField.password.value=='' || inputField.password.value== undefined || inputField.password.value==null){
		setInputField((prev)=>({...prev,"password":{...prev["password"],error:'Password canno\'t be empty!'}}))

	}	
	else{
		setInputField((prev)=>({...prev,"password":{...prev["password"],error:''}}))

	}

	if(inputField.otp.error=='' && inputField.password.error==''){

	const msg=await authObj.createSession(inputField.otp.value);
	console.log(msg);	
	if(msg.name='AppwriteException'){
		setInputField((prev)=>({...prev,"error":msg.message}))
	}
	else{
	//creating document
	const msg2=await authObj.createDocument(inputField.firstName.value,inputField.lastName.value,inputField.email.value,inputField.password.value)
	
	if(msg2.name='AppwriteException'){
		setInputField((prev)=>({...prev,"error":msg2.message}))
	}
	else{
		navigate('/')
	}
	}

	}
}

const handleOnChange = (fieldName, value)=>{
	setInputField((prev)=>({...prev,
							[fieldName]:
								{...prev[fieldName],
									"value": value}}));
}


	const NextPage = async(e)=>{
		e.preventDefault();

		if(inputField.firstName.value=='' || inputField.firstName.value== undefined || inputField.firstName.value==null){
	  
			setInputField((prev)=>({...prev,firstName:{...prev["firstName"],error:'firstName canno\'t be empty!'}}))
		  }
		else{
			  setInputField((prev)=>({...prev,"firstName":{...prev["firstName"],error:''}}))
	  
		  }
		if(inputField.lastName.value=='' || inputField.lastName.value== undefined || inputField.lastName.value==null){
	  
			setInputField((prev)=>({...prev,lastName:{...prev["lastName"],error:'lastName canno\'t be empty!'}}))
		  }
		else{
			  setInputField((prev)=>({...prev,"lastName":{...prev["lastName"],error:''}}))
	  
		  }
		if(inputField.email.value=='' || inputField.email.value== undefined || inputField.email.value==null){
	  
			setInputField((prev)=>({...prev,email:{...prev["email"],error:'email canno\'t be empty!'}}))
		  }
		else{
			  setInputField((prev)=>({...prev,"email":{...prev["email"],error:''}}))
	  
		  }



		if(inputField.firstName.error=='' && inputField.lastName.error=='' && inputField.email.error==''){
		const userId=ID.unique()
		
		const msg= await authObj.OTP_Verification(inputField.email.value);
		console.log(msg);

		if(msg.name='AppwriteException'){
			setInputField((prev)=>({...prev,"error":msg.message}))
		}
		else{
		setPage((page)=>page+1);
		}
	

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
	<div className="modal-container flex dark:text-textColor dark:bg-background bg-light text-black justify-center my-10 border-2 border-purple-500 shadow-2xl rounded-2xl ">
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
			<Input label='FirstName'
				   type="text"
				   value={inputField?.firstName?.value}
				   onChange={(e) =>handleOnChange('firstName',e.target.value)}
				   style={inputField.firstName.error!=''?" border-b-4 border-red-500":""}
				   />
			{inputField.firstName.error!=''&&<span className="text-red-500 ">{inputField.firstName.error}</span>}
			<Input label='LastName'
			type="text"
			value={inputField?.lastName?.value}
				   onChange={(e) =>handleOnChange('lastName',e.target.value)}
				   style={inputField.lastName.error!=''?" border-b-4 border-red-500":""}
			/>
			{inputField.lastName.error!=''&&<span className="text-red-500 ">{inputField.lastName.error}</span>}
			
			<Input label='Email'
				   type="email"
				   value={inputField?.email?.value}
				   onChange={(e) =>handleOnChange('email',e.target.value)}
				   style={inputField.email.error!=''?" border-b-4 border-red-500":""}
				   />
			{inputField.email.error!=''&&<span className="text-red-500 ">{inputField.email.error}</span>}
		<Link to='/Login'>	<h2 className="text-purple-500 my-2">Already an account? Login</h2>		   
		</Link>
		{inputField.error!=''&&<span className="text-red-500 ">{inputField.error}</span>}
		<br/>
		<button type='button' className='max-w-fit my-5 dark:bg-black border-purple-500  text-textColor hover:bg-purple-500 hover:text-purple-500 border-2
		hover:border-2 hover:border-black p-1 px-2 rounded-lg'onClick={(e)=>NextPage(e)} >Next</button>

			</>
			:
			<>

			<Input label='OTP'
				   type="text"
				   value={inputField?.otp?.value}
				   onChange={(e) =>handleOnChange('otp',e.target.value)}
				   style={inputField.otp.error!=''?" border-b-4 border-red-500":""}
				   />
			{inputField.otp.error!=''&&<span className="text-red-500 ">{inputField.otp.error}</span>}
			<Input label='Password'
				   type={togglePass?"text":"password"}
				   value={inputField?.password?.value}
				   onChange={(e) =>handleOnChange('password',e.target.value)}
				   style={inputField.password.error!=''?" border-b-4 border-red-500":""}
				   />
			{inputField.password.error!=''&&<span className="text-red-500 ">{inputField.password.error}</span>}
			<Link to='/Login'><h2 className="text-purple-500 my-2">Already an account? Login</h2>		   </Link>
			<button type='button'><FontAwesomeIcon onClick={()=>setTogglePass((prev)=>!prev)} className='cursor-pointer text-lg relative bottom-16 left-32  ' icon={togglePass?faEye:faEyeSlash}/>
		</button>
		{inputField.error!=''&&<span className="text-red-500 ">{inputField.error}</span>}
		<br/>
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