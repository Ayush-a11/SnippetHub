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
   <div onClick={handleFocus} className={`relative self-start ${focused?'top-2 text-xs bg-black  border-textColor':'top-7 text-base'} rounded-lg px-2 transition-all duration-300 font-bold text-textColor  ml-3`}>{label}</div>
      <input
        type={type}
        className={`outline-none bg-boxcol bg-opacity-80 text-textColor  w-72 rounded-lg pl-4 pr-8 py-2 focus:textColor ${style}`}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
		    onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Input;