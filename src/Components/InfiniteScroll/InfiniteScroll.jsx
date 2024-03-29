import React, { useEffect, useState } from 'react'
import { BaseUri } from '../CommonUtility/ApiTemplate/Config.js';
import ApiHook from '../CommonUtility/ApiTemplate/useApiHook.js';
import Loader from '../CommonUtility/Loader.jsx'
import BackupCard from '../CommonUtility/BackupCard.jsx';

function InfiniteScroll({devMode}) {
	
	const [loading, setLoading] =useState(true);
	const [page,setPage]=useState(1);
	const RequestUrl= BaseUri+'/tv/top_rated?page='+page;
	const Body="";
	const Method='Get'
	const [data,setData]=useState([]);

	// function triggerRequest(){
		const temp= ApiHook(Method,RequestUrl,Body,page);
		
		// setData(data=> [...data,temp]);		
	// }

	// console.log(page);
	// console.log(data);

	console.log(window.innerHeight,window.scrollY,window.document.body.offsetHeight)
	useEffect(()=>{
        if(temp.results){
			// if(page==1)
			// 	setData(temp.results)
			// else
				setData(prevData => [...prevData, ...temp.results]);

		}
	setLoading(false)
	},[temp])
	

	const handleScroll=(e)=>{
		if(e.target.scrollTop+e.target.clientHeight >=e.target.scrollHeight-40){
			setLoading(true);
			setPage(page=>page+1);
		}
	}


	return (
		<div className="relative w-11/12 m-auto rounded-xl ">
			<h1 className="bg-black text-purple-500 text-4xl  border-accent p-1 ">Infinite Scroll + Lazy Loading</h1>
			{devMode &&
			<div className="flex justify-end bg-accent text-textColor p-2  transition-transform duration-300">
				<button className={`relative z-10 ${currentTab == 'Snip' ? 'border-b-2 border-purple-500' : null}`} onClick={() => setCurrentTab('Snip')}>Snippet {'</>'}</button>
			</div>
			}	
		<div className='grid grid-cols-4 bg-black  h-screen overflow-auto border-2' onScroll={handleScroll}>
		<BackupCard/>
		<div className='absolute z-50 top-1/2 rounded-full left-1/2 bg-black'>
		{loading && <Loader/>}
		</div>
		{data && data.map((item)=>(
		
		
		<div key={item?.id} className="card w-44 h-60 flex flex-col items-center bg-opacity-90 mt-10 mx-auto bg-accent shadow-xl hover:scale-125 transition-transform duration-300"> 	
		<h3  className=' bg-black bg-opacity-80 px-2 relative top-5 left-7 text-purple-500 '>{item.vote_average} Rating</h3>

		<img className="bg-cover size-40" src={`https://image.tmdb.org/t/p/original${item?.poster_path}`} loading='lazy'></img>
		<h1 className='text-textColor'>{item?.original_name}</h1>
		</div>

		))
		}
		
	</div>
	</div>
  )
}

export default InfiniteScroll