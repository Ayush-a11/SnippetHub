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
	<div className={`bg-accent transition-transform duration-300 h-${height} text-purple-500 p-4 font-mono font-bold`}> 
		<nav className="cursor-pointer flex justify-between">
		<FontAwesomeIcon className='text-3xl' icon={faCentercode}/>
			<ul className={`space-x-4 sm:flex ${height==14?'hidden':'flex-col '} `}>		
				<li className=' hover:text-purple-100'>Home</li>
				<li className=' hover:text-purple-100'>Contact Us</li>
				<li className=' hover:text-purple-100'>Write To Us</li>
			</ul>
		<div>
			
			<button className="sm:hidden" onClick={toggleHeight} ><FontAwesomeIcon icon={faBars}/></button> &nbsp;
			<button className=' hover:text-purple-100'>Login</button>&nbsp;
			<button className=' hover:text-purple-100'>SignUp</button>
		</div>
		</nav>
		<div>

		</div>
	</div>
  )
}

export default Header