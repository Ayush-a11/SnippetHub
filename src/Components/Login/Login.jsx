import React, { useEffect, useState } from 'react'
import Input from '../CommonUtility/Input'
import LoginGif from '../../assets/Login.gif'
import '../../../src/index.css'
import { Link,useNavigate  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import authObj from '../../appWrite/AuthUtils';
import { setLogin } from '../Store/GameSlice';


function Login() {
    const dispatch=useDispatch();
	const [togglePass, setTogglePass] =useState();
	const [inputField,setInputField] = useState({
								email:{
										value:'',
										error:''
									},
								password:{
										value:'',
										error:''
									}
		});

	const navigate =useNavigate();

	

	const handleForm= async(e)=>{
		e.preventDefault();	

		console.log(inputField)
		
		if(inputField.email.value=='' || inputField.email.value== undefined || inputField.email.value==null){
		  inputField.email.error='UserName canno\'t be empty!';

		  setInputField((prev)=>({...prev,email:{...prev["email"],error:'email canno\'t be empty!'}}))
		}
		else{
			setInputField((prev)=>({...prev,"email":{...prev["email"],error:''}}))

		}
		if(inputField.password.value=='' || inputField.password.value== undefined || inputField.password.value==null){
			setInputField((prev)=>({...prev,"password":{...prev["password"],error:'Password canno\'t be empty!'}}))

		}	
		else{
			setInputField((prev)=>({...prev,"password":{...prev["password"],error:''}}))

		}


		// if(inputField.email.error!='' && inputField.password.error!=''){
		// 	console.log('success');

			const user= await authObj.loginWithEmail(inputField.email.value,inputField.password.value)
			
			console.log('login',user);

			if(user){
				dispatch(setLogin(user))
				navigate('/')
			}
			else{

			}

			// const newmsg= await authObj.deleteSession(msg.$id);

			// console.log('delete',newmsg);

		// }

	}

	const handleOnChange = (fieldName, value)=>{
		setInputField((prev)=>({...prev,
								[fieldName]:
									{...prev[fieldName],
										"value": value}}));
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
			<Input label='Email'
				   type="text"
				   value={inputField?.email?.value}
				   onChange={(e) =>handleOnChange('email',e.target.value)}
				   style={inputField.email.error!=''?" border-b-4 border-red-500":""}	   
				   />
			{inputField.email.error!=''&&<span className="text-red-500 ">{inputField.email.error}</span>}
			<Input label='Password'
				   type={togglePass?"text":"password"}
				   value={inputField?.password?.value}
				   onChange={(e) =>handleOnChange('password',e.target.value)}
				   style={inputField.password.error!=''?" border-b-4 border-red-500":""}		
			/>
			
		<button type='button'><FontAwesomeIcon onClick={()=>setTogglePass((prev)=>!prev)} className='cursor-pointer text-lg absolute bottom-1/2 right-1 mb-5    ' icon={togglePass?faEye:faEyeSlash}/>
		</button>
		{inputField.password.error!=''&&<span className="text-red-500 ">{inputField.password.error}</span>}

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