import React, { useEffect, useState } from 'react';
import Loader from './Loader';

function BackupCard() {
//   const [color, setColor] = useState('boxcol');

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setColor(prevColor => prevColor === 'accent' ? 'boxcol' : 'accent');
//     }, 1000);

//     // Cleanup function to clear the interval when component unmounts
//     return () => clearInterval(intervalId);
//   }, []);

  const cardClasses = `card w-44 h-60 flex flex-col justify-center items-center mt-10 mx-auto  shadow-xl hover:scale-125 transition-all `;

  return (
    <div>
      <div className={`${cardClasses} bg-accent animate-pulse duration-75`}>
        <Loader />
        <h1 className='text-textColor '>Loading...</h1>
      </div>
    </div>
  );
}

export default BackupCard;
