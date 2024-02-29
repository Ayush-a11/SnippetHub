import React, { useEffect, useState } from 'react'
import ApiHook from '../CommonUtility/ApiTemplate/ApiHook.js'
import { useDispatch, useSelector } from 'react-redux';
import { BaseUri } from '../CommonUtility/ApiTemplate/Config';
import {setData,clearData} from '../Store/GameSlice'

function TrendingGame({devMode=false}) {
	const [currentTab, setCurrentTab] = useState()
	const gameData= useSelector((state)=>state)
	const dispatch=useDispatch();
	console.log(gameData);

	const RequestUrl= BaseUri+'/v4/games';
	const Body="fields name, rating,cover.*;sort rating desc;limit 5;";
	const Method='Post'

	// useEffect(()=>{
	// 	if(gameData.Current!='TrendingGame'){
		// const temp=()=>{
		// dispatch(clearData());
		const data=  ApiHook(Method,RequestUrl,Body);
		const Current='TrendingGame';
		dispatch(setData(data,Current));
		// }
	// })

  return (
	<div className="relative w-11/12 m-auto rounded-xl ">
			<h1 className="bg-black text-purple-500 text-4xl  border-accent p-1 ">Responsive SlideShow</h1>
			{devMode &&
			<div className="flex justify-end bg-accent text-textColor p-2  transition-transform duration-300">
				<button className={`relative z-10 ${currentTab == 'Snip' ? 'border-b-2 border-purple-500' : null}`} onClick={() => setCurrentTab('Snip')}>Snippet {'</>'}</button>
			</div>
			}	

			<hr className=" relative -top-1 border-2 border-black" />
			<div>
				<button >enter</button>
			</div>
	</div>
  )
}

export default TrendingGame