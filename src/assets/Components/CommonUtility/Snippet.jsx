import React from 'react'
import ReactCodeSinppet from 'react-code-snippet'


function Snippet({code}) {
  return (
	<div>Snippet
		<ReactCodeSinppet lang="jsx" code={code} />
		
	</div>
  )
}

export default Snippet