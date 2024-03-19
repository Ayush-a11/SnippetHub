import { faCentercode } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Loader({size="10",color="purple"}) {
  return (
	<div className={`size-${size} rounded-full bg-transparent animate-spin   text-purple-500 `}>
			<FontAwesomeIcon className='text-4xl' icon={faCentercode}/>
	</div>
  )
}

export default Loader