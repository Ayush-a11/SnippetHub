import { faCentercode } from '@fortawesome/free-brands-svg-icons'
import { faBars, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Header() {

	const [height, setHeight] =useState(14)
	const [theme,setTheme] = useState('dark');
	const [isSpinning, setIsSpinning] = useState(false);

	const navigate=useNavigate();

	const toggleTheme=()=>{
		setIsSpinning(true);
		if(theme=='light'){
		setTheme('dark');
		document.documentElement.classList.add('dark');
		}
		else{
			setTheme('light');
			document.documentElement.classList.remove('dark');
		}

		localStorage.setItem('theme', theme);
		setTimeout(()=>{
			setIsSpinning(false);
		},1800)
	}

	useEffect(()=>{
		const theme=localStorage.getItem('theme');
		console.log('local',	 theme);
		setTheme(theme=='dark'?'light':'dark');
		if(theme=='light'){
			document.documentElement.classList.add('dark');
		}
	},[])

	const toggleHeight =()=>{
		if(height==14)
			setHeight(44);
		else	
			setHeight(14);
	}
  return (
	<div className={`fixed z-50 w-full bg-light  dark:bg-background transition-transform duration-300 h-${height} text-black dark:text-textColor p-4 font-mono font-bold border-b border-background dark:border-textColor`}> 
		<nav className="cursor-pointer flex justify-between">
		<FontAwesomeIcon className='text-3xl text-hovCol' icon={faCentercode}/>
			<ul className={`space-x-4 sm:flex ${height==14?'hidden':'flex-col '} `}>		
				<li className=' hover:text-hovCol'>Home</li>
				<li className=' hover:text-hovCol'>Contact Us</li>
				<li className=' hover:text-hovCol'>Write To Us</li>
			</ul>
		<div>
			
			<button className="sm:hidden" onClick={toggleHeight} ><FontAwesomeIcon icon={faBars}/></button> &nbsp;
			<button className={` dark:text-white text-black text-2xl rounded-full mr-4 ${isSpinning?'animate-spin-once':''} hover:text-hovCol hover:dark:text-hovCol`} onClick={toggleTheme}>
				<FontAwesomeIcon icon={faSun}/>
			</button>
			<button onClick={()=>navigate('/Login')} className=' text-white border-2 border-hovCol rounded-sm bg-buttonCol p-1 px-4 ' >Login</button>&nbsp;
			<button onClick={()=>navigate('/SignUp')} className=' text-black border-2 border-hovCol rounded-sm bg-buttonCol2 p-1 px-4'>SignUp</button>
		</div>
		</nav>
		<div>

		</div>
	</div>
  )
}

export default Header