import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

function Question({ data, openedBox, setOpenedBox }) {
  const showInfo = openedBox === data.id;

  const icon = showInfo ? (
    <MdOutlineKeyboardArrowUp />
  ) : (
    <MdOutlineKeyboardArrowDown />
  );

  const element = showInfo ? <h4>{data.title}</h4> : <p>{data.title}</p>;

  const handleClick = () => {
    if (showInfo) {
      setOpenedBox(null);
    } else {
      setOpenedBox(data.id);
    }
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
        <p>{showInfo ? data.info : null}</p>
      </div>
    </div>
  );
}

export default Question;
