import React, { useState, useRef } from 'react';
import Input from '../CommonUtility/Input';
import Button from '../CommonUtility/Button';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

function Drag_N_Drop({ devMode }) {
  const [id, setId] = useState(1);
  const [note, setNote] = useState('');
  const [data, setData] = useState([]);
  const boundary = useRef(null);

  const handleAddNote = () => {
    const position = generateRandomPos();
    setData((prev) => [...prev, { id, note, position }]);
    setId((prev) => prev + 1);
    setNote('');
  };

  const generateRandomPos = () => {
    if (boundary.current) {
      let { right, x, y, bottom } = boundary.current.getBoundingClientRect();
      conosl
      right -= 10;
      x += 10;
      bottom -= 10;
      y += 10;

      const ax = Math.random() * (right - x) + x;
      const ay = Math.random() * (bottom - y) + y;
	  console.log(ax,ay)
      return { x: ax, y: ay };
    }
    return { x: 0, y: 0 };
  };

  return (
    <div className="relative w-11/12 m-auto rounded-xl">
      <h1 className="text-textColor text-4xl border-accent p-1">Drag & Drop</h1>
      {devMode && (
        <div className="flex justify-end bg-accent text-textColor p-2 transition-transform duration-300">
          <button className="relative z-10 border-b-2 border-purple-500">Snippet {'</>'}</button>
        </div>
      )}

      <div className="flex justify-center items-center">
        <Input
          label="Note"
          type="text"
          placeholder="Enter your Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Button onClick={handleAddNote} icon={faAdd} />
      </div>

      <div ref={boundary} className="bg-blue-500 h-72 relative">
        {data.map((item) => (
          <div
            key={item.id}
            style={{ left: `${item.position.x}px`, top: `${item.position.y}px` }}
            className="absolute max-w-fit max-h-fit m-5 flex text-textColor items-center bg-opacity-90 bg-accent shadow-xl hover:scale-125 transition-transform duration-300"
          >
            {item.note}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Drag_N_Drop;
