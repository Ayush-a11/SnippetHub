import { faCentercode } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Header() {

	const [height, setHeight] =useState(14)

	const toggleHeight =()=>{
		if(height==14)
			setHeight(44);
		else	
			setHeight(14);
	}
  return (
	<div className={`fixed z-50 w-full  bg-background transition-transform duration-300 h-${height} text-textColor p-4 font-mono font-bold border-b border-textColor`}> 
		<nav className="cursor-pointer flex justify-between">
		<FontAwesomeIcon className='text-3xl' icon={faCentercode}/>
			<ul className={`space-x-4 sm:flex ${height==14?'hidden':'flex-col '} `}>		
				<li className=' hover:text-purple-100'>Home</li>
				<li className=' hover:text-purple-100'>Contact Us</li>
				<li className=' hover:text-purple-100'>Write To Us</li>
			</ul>
		<div>
			
			<button className="sm:hidden" onClick={toggleHeight} ><FontAwesomeIcon icon={faBars}/></button> &nbsp;
			<button className=' text-white rounded-sm bg-buttonCol p-1 px-4 ' >Login</button>&nbsp;
			<button className=' text-black rounded-sm bg-buttonCol2 p-1 px-4'>SignUp</button>
		</div>
		</nav>
		<div>

		</div>
	</div>
  )
}

export default Header