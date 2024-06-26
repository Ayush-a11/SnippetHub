import React, { useEffect, useState } from 'react'
import Loader from '../CommonUtility/Loader';

function TypingEffect({devMode=false}) {
  const text= "Hey there, I'm Ayush Dimri. Welcome to SnippetHub—your gateway to discovery and growth. Lets dive in, explore, and elevate ourselves together.";
  const [index,setIndex] =useState(0);
  const [displayText,setDisplayText] = useState('');
  const [currentTab, setCurrentTab] = useState()

  useEffect(()=>{
	
	const timer=setTimeout(()=>{
		if(index <text.length){
	
		setDisplayText(prev=> prev+text.charAt(index))
		setIndex((index)=>(index+1))
	}
		else{
		clearTimeout(timer)
		}
	},80)
	
  },[index])

  return (
	<div className=" w-full">
		<Loader/>
		{devMode &&
			<div className=" flex justify-end bg-accent text-textColor p-2  transition-transform duration-300">
			<button className={`relative z-10 ${currentTab == 'Snip' ? 'border-b-2 border-purple-500' : null}`} onClick={() => setCurrentTab('Snip')}>Snippet {'</>'}</button>
		</div>
		}
	<div className=" py-40 w-8/12 m-auto bg-light text-black dark:bg-background dark:text-textColor text-2xl  border-accent p-1">{displayText}</div>
	</div>
  )
}

export default TypingEffect