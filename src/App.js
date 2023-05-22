import Question from './Question';
import woman from './images/illustration-woman-online-mobile.svg';
import datas from './data';
import deskWoman from './images/illustration-woman-online-desktop.svg';
import box from './images/illustration-box-desktop.svg';
import { useState } from 'react';

function App() {
  const [openedBox, setOpenedBox] = useState(null);

  const renderedData = datas.map((data) => {
    return (
      <div key={data.id}>
        <Question
          data={data}
          openedBox={openedBox}
          setOpenedBox={setOpenedBox}
        />
        <div className="line"></div>
      </div>
    );
  });

  return (
    <main>
      <div className="accordion">
        <div className="img-container">
          <img
            className="mobile-woman"
            src={woman}
            alt="woman working with a computer"
          />
          <img
            className="desk-woman"
            src={deskWoman}
            alt="woman working with a computer"
          />
          <img src={box} alt="box" className="box" />
        </div>
        <div className="content">
          <h1 className="faq">FAQ</h1>
          <div className="questions">{renderedData}</div>
        </div>
      </div>
    </main>
  );
}

export default App;
