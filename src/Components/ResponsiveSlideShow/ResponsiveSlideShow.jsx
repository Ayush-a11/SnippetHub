import React, { useEffect, useState } from 'react'

function ResponsiveSlideShow({devMode=false}) {
	const imageArr = [
		{
			id: 'Game1',
			img: 'https://cdn.vox-cdn.com/thumbor/6I-IQtvx29OSQp0nZscVi7Ev9rA=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/68510166/jbareham_201201_ecl1050_goty_2020_top_50_02.0.jpg'
		},
		{
			id: 'Game2',
			img: 'https://assets-prd.ignimgs.com/2022/09/23/top25modernpcgames-blogroll-1663951042311.jpg'
		},
		{
			id: 'Game3',
			img: 'https://img.utdstc.com/screen/08b/541/08b5416dbe9366941d6f55f15a72c51e49c1d4a65dd212fc259342600a4e8bd1:400'
		},
		{
			id: 'Game4',
			img: 'https://assets.mspimages.in/gear/wp-content/uploads/2023/01/actio-games.jpg'
		},
	]

	const [currentTab, setCurrentTab] = useState(imageArr[0].id)
	const [CurrentIndex,setCurrentIndex] = useState(0)
	// console.log(CurrentIndex,imageArr.length)
	useEffect(()=>{
		if(currentTab!='Snip'){
		const interval= setInterval(()=>{
			
			setCurrentIndex((index)=>(index+1)%imageArr.length);
			
		},3000)
		}
	},[])

	return (
		<div className="relative w-11/12 m-auto rounded-xl ">
			<h1 className="bg-background text-textColor text-4xl  border-accent p-1 ">Responsive SlideShow</h1>
			{devMode &&
			<div className="flex justify-end bg-accent text-textColor p-2  transition-transform duration-300">
				<button className={`relative z-10 ${currentTab == 'Snip' ? 'border-b-2 border-purple-500' : null}`} onClick={() => setCurrentTab('Snip')}>Snippet {'</>'}</button>
			</div>
			}	

			<hr className=" relative -top-1 border-2 border-accent" />
			<div>
				<img src={imageArr[CurrentIndex].img} className={`md:w-full md:h-96 transition-transform ease-in-out`} />

			</div>
				<div className='absolute top-12 w-full flex flex-col '>
				<div className=" flex justify-between w-full h-full" >
					<button onClick={()=>setCurrentIndex((index)=>index>0?index-1:imageArr.length-1)} className='hover:opacity-70 opacity-0 w-6/12 h-96 bg-black text-purple-500 text-8xl'>{'<'}</button>
					<div className=" flex items-end justify-center w-3/12 space-x-2 ">
					{imageArr.map((item,index) => (
						
						<div key={item.id} className={` ${currentTab != 'Snip' ? 'block' : 'hidden'} `} >
							<button key={item.id} className={`cursor-pointer ${imageArr[CurrentIndex].id == item.id ? 'bg-purple-500' : 'bg-white'} size-4  rounded-full`}
								onClick={() =>setCurrentIndex(index) }>
							</button>
						</div>


					))}
					</div>
					<button onClick={()=>setCurrentIndex((index)=>index<imageArr.length-1?index+1:0)} className='hover:opacity-70 opacity-0	w-6/12 h-96 bg-black text-purple-500 text-8xl'>{'>'}</button>
					
				</div>
				
				
				</div>
				
			</div>
	)
}

export default ResponsiveSlideShow