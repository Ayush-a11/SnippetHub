import React from 'react'

function Button() {
  return (
	<div>
		<button className=' dark:bg-black dark:text-primary text-primary border-primary font-sans font-bold hover:bg-primary hover:text-black border-2
		hover:border-2 hover:border-black p-2 px-4 rounded-2xl' ><FontAwesomeIcon className='' icon={faInstagram} /></button>
	</div>
  )
}

export default Button