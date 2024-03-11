import { faCentercode } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
  return (
	<div className="bg-accent text-purple-500 p-4 font-mono font-bold"> 
		<nav className="flex justify-between">
		<FontAwesomeIcon className='text-3xl' icon={faCentercode}/>
			<ul className="flex space-x-4">		
				<li>Home</li>
				<li>Contact Us</li>
				<li>Write To Us</li>
			</ul>
		<div>
			<button>Login</button>&nbsp;
			<button>SignUp</button>
		</div>
		</nav>
	</div>
  )
}

export default Header