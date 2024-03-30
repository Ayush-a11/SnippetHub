import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

function LeftMenuBar() {
	const Components = [
		{
			id: 'Rs_Component',
			name: 'Responsive Slide-Show'
		},
		{
			id: 'Tab_Component',
			name: 'Dynamic Tab Component'
		}
	]
	const [active, setActive] = useState(false);
	return (
		<div className={`${active?'w-10 bg-background':'bg-accent'} transition-transform duration-300 text-textColor`}>
			<div className={`${active?'transform translate-x-[-90%] duration-300 w-32':'transform translate-x-[0] duration-300 w-64'} flex justify-between h-screen`}>
				<div className="flex flex-col items-start  p-6">
					{
						Components.map((item) => (
							<div key={item.id} className=" cursor-pointer">
								{item.name}
							</div>
						))
					}
				</div>
				<div>
				<button  onClick={()=>setActive((prev)=>!prev)}><FontAwesomeIcon icon={faBars}/></button>
				</div>

			</div>
		</div>
	)
}

export default LeftMenuBar