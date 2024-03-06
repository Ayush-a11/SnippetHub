import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

function Accordion({devMode}) {

  const [currentTab, setCurrentTab] = useState()
  const [isHide,setIsHide] = useState(true);
  const [height,setHeight] = useState(100);

  const heightHandler =() =>{

    // setIsHide((prev)=>!prev)

    setInterval((

    ) => {
    const timer= setHeight(prev=>prev+10)

      if(!isHide){
        clearInterval(timer)
      }
    },100)

  }

  return (
    <div className="relative  w-11/12 m-auto rounded-xl ">
    <h1 className="bg-black text-purple-500 text-4xl  border-accent p-1 ">Accordion</h1>
    {devMode &&
    <div className="flex justify-end bg-accent text-textColor p-2  transition-transform duration-300">
      <button className={`relative z-10 ${currentTab == 'Snip' ? 'border-b-2 border-purple-500' : null}`} onClick={() => setCurrentTab('Snip')}>Snippet {'</>'}</button>
    </div>
    }	

    <hr className=" relative -top-1 border-2 border-black" />
    <div>
        <div className="relative z-10"> 
          <button className=" bg-accent w-full text-white hover:text-gray-200" onClick={heightHandler}>
            {isHide?
            <FontAwesomeIcon icon={faPlus}/> 
          : <FontAwesomeIcon icon={faMinus}/>
            }
          </button>
        </div>

        <div className={`${isHide? 'max-h-'+height:'max-h-'+height} overflow-hidden transition-transform duration-500 text-textColor bg-accent`} 
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veniam ducimus, unde quae, tempore debitis perferendis culpa, excepturi odio est optio odit sapiente quia quaerat minus fuga voluptas. Accusamus libero eius minima impedit nesciunt.</div>
    </div>
    </div>
  )
}

export default Accordion