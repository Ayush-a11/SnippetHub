import React, { useEffect, useState } from 'react'
import { BaseUri } from '../CommonUtility/ApiTemplate/Config.js';
import ApiHook from '../CommonUtility/ApiTemplate/useApiHook.js';


function InfiniteScroll() {
	
	const [page,setPage]=useState(1);
	const [data,setData]=useState([]);
	const RequestUrl= BaseUri+'/tv/top_rated?page='+page;
	const Body="";
	const Method='Get'

	// function triggerRequest(){
		const temp= [...data,ApiHook(Method,RequestUrl,Body,page)];
		
		// setData(data=> [...data,temp]);		
	// }

	console.log(page);
	console.log(temp);

	console.log(window.innerHeight,window.scrollY,window.document.body.offsetHeight)
	useEffect(() => {
		const onScroll = () => {
		  // if scrolled to the bottom
		  if(window.innerHeight + window.scrollY >= window.document.body.offsetHeight){
			setPage(page=>page+1);

			// triggerRequest();
		}
		}
		
		// scroll event
		window.addEventListener('scroll', onScroll);
		
		// memory cleanup, remove listener
		return () => window.removeEventListener('scroll', onScroll);
	  }, []);


	return (
		<div className='grid grid-cols-4 bg-black  h-96 overflow-auto'>
		{data?.results && data.results.map((item)=>(
		
		<div key={item?.id} className="card w-44 h-60 flex flex-col items-center bg-opacity-90 mt-10 mx-auto bg-accent shadow-xl hover:scale-125 transition-transform duration-300"> 	
		<h3  className=' bg-black bg-opacity-80 px-2 relative top-5 left-7 text-purple-500 '>{item.vote_average} Rating</h3>

		<img className="bg-cover size-40" src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}></img>
		<h1 className='text-textColor'>{item?.original_name}</h1>
		</div>

		))
		}
		<button className='bg-red text-blue-500' onClick={()=>setPage((p)=>p+1)}>++</button>
	</div>
  )
}

export default InfiniteScroll