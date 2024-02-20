import React, { useState } from 'react'
import CurrentPath from '../Tabs/Tabs.jsx'
function Tabs() {

	const [currentTab, setCurrentTab] = useState('Tab1');
	const tabObj =[
		{
			name:'Tab1',
			text:'Content Tab1- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptatibus, voluptas magnam debitis temporibus veritatis ratione. Rerum laudantium dolorem debitis saepe accusamus dicta, maiores a veritatis architecto cupiditate? A voluptatem odio fuga. Eligendi corporis molestiae unde nihil cumque rerum esse exercitationem eum praesentium quisquam similique, eos officiis fugiat non totam iure aperiam temporibus dolores repellendus inventore sit? Tenetur vel in expedita quis modi itaque.'
		},
		{
			name:'Tab2',
			text:'Content Tab2- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptatibus, voluptas magnam debitis temporibus veritatis ratione. Rerum laudantium dolorem debitis saepe accusamus dicta, maiores a veritatis architecto cupiditate? A voluptatem odio fuga. Eligendi corporis molestiae unde nihil cumque rerum esse exercitationem eum praesentium quisquam similique, eos officiis fugiat non totam iure aperiam temporibus dolores repellendus inventore sit? Tenetur vel in expedita quis modi itaque.'
		},
		{
			name:'Tab3',
			text:'Content Tab3- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptatibus, voluptas magnam debitis temporibus veritatis ratione. Rerum laudantium dolorem debitis saepe accusamus dicta, maiores a veritatis architecto cupiditate? A voluptatem odio fuga. Eligendi corporis molestiae unde nihil cumque rerum esse exercitationem eum praesentium quisquam similique, eos officiis fugiat non totam iure aperiam temporibus dolores repellendus inventore sit? Tenetur vel in expedita quis modi itaque.'
		}
	]


  return (
	<>
	<h1 className="text-purple-500 text-4xl">Dynamic Tab</h1>
	<div className="bg-accent text-textColor  rounded-xl transition-transform duration-300">
	<div className="bg-accent flex justify-between text-gray-300 space-x-4 ml-2 ">
		<div>
		{tabObj.map((item)=>(
		<button key={item.name} type="button" className={`${currentTab==item.name?'border-b-2 border-purple-500':null} p-2 hover:text-white`} 
		onClick={()=>setCurrentTab(item.name)}>{item.name}</button>
		))}
		</div>

		<button className={`${currentTab=='Snip'?'border-b-2 border-purple-500':null}`} onClick={()=>setCurrentTab('Snip')}>Snippet {'</>'}</button>
	</div>
	<hr className="border-2 border-black"/>
	<div>
		{
			tabObj.map((item)=>(
			
				<div className={`${currentTab==item.name?'block':'hidden'}`}>{item.text}</div>
			))
		}
		{
			currentTab==='Snip' &&
						<div>Code Snippet</div>
		}
	</div>
	</div>
	</>
  )
}

export default Tabs