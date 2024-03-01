import React, { useEffect, useState } from 'react'
import ApiHook from '../CommonUtility/ApiTemplate/ApiHook.js'
import { useDispatch, useSelector } from 'react-redux';
import { BaseUri } from '../CommonUtility/ApiTemplate/Config.js';
import {setData,clearData} from '../Store/GameSlice.js'

function TrendingMovie({devMode=false}) {
	const [currentTab, setCurrentTab] = useState()
	const gameData= useSelector((state)=>state)
	const dispatch=useDispatch();
	console.log(gameData);

	const RequestUrl= BaseUri+'/movie/top_rated';
	const Body="";
	const Method='Get'

	// useEffect(()=>{
	// 	if(gameData.Current!='TrendingGame'){
		// const temp=()=>{
		// dispatch(clearData());
		const data=  ApiHook(Method,RequestUrl,Body);
		const Current='TrendingMovie';
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
			<div className='grid grid-cols-3 bg-red-500'>
				{data.results && data.results.map((item)=>(
				<div key={item?.id} className="card"> 	
				<img src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
				className='size-40'></img>
				<h1>{item?.original_title}</h1>
				</div>
				))
				}
			</div>
	</div>
  )
}

export default TrendingMovie