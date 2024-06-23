import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Button({onClick,icon}) {
  return (
	<div>
		<button onClick={onClick} className=' text-white border-2 border-hovCol rounded-sm bg-buttonCol p-1 px-4' ><FontAwesomeIcon className='' icon={icon} /></button>
	</div>
  )
}

export default Button