import React, { useEffect, useState } from 'react';

function Input({ label = "", style = "", type = "text", placeholder = "", value = "",onChange,...props }) {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };
  	useEffect(() => {

		if(value.length!=0){
			setFocused(true)
		}
	},[value])
  return (
    <div className="flex flex-col relative transition-transform duration-300">
   <div onClick={handleFocus} className={`relative self-start ${focused?'top-2 text-xs bg-black border-b-2  border-purple-500':'top-7 text-base'}  px-2 rounded-md transition-all duration-300 font-bold text-purple-500  ml-3`}>{label}</div>
      <input
        type={type}
        className={`border w-72 rounded-lg pl-4 pr-8 py-2 focus:border-purple-500 ${style}`}
        value={value}
        // placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
		onChange={(e)=>onChange(e.target.value)}
        {...props}
      />
    </div>
  );
}

export default Input;