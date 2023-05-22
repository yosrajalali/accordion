import { useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

function Question({ data, index }) {
  const [showInfo, setShowInfo] = useState(false);

  const icon = showInfo ? (
    <MdOutlineKeyboardArrowUp />
  ) : (
    <MdOutlineKeyboardArrowDown />
  );

  const element = showInfo ? <h4>{data.title}</h4> : <p>{data.title}</p>;
  const handleClick = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="questions-container" key={data.id}>
      <div className="question">
        {element}
        <button className="btn" onClick={handleClick}>
          {icon}
        </button>
      </div>
      <div className="answer">
        <p>{showInfo && data.info}</p>
      </div>
    </div>
  );
}

export default Question;
