import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Button({onClick,icon, text,className}) {
  return (
	<div>
		<button onClick={onClick} className={` text-white border-2 border-hovCol rounded-sm bg-buttonCol p-1 px-4 ${className}`} ><FontAwesomeIcon className='' icon={icon} />{text}</button>
	</div>
  )
}

export default Button