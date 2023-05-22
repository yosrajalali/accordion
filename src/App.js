import Question from './Question';
import woman from './images/illustration-woman-online-mobile.svg';
import datas from './data';
import background from './images/bg-pattern-mobile.svg';
import deskWoman from './images/illustration-woman-online-desktop.svg';
import box from './images/illustration-box-desktop.svg';

function App() {
  const renderedData = datas.map((data, index) => {
    return (
      <div key={data.id}>
        <Question data={data} index={index} />
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
          <img src={box} alt="box image" className="box" />
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
