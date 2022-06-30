import data from "../assets/data/program.json";

const ProgramList = () => {
  return (
    <main>
      {data.map((element, index) => {
        return (
          <>
            <div className="program" key={index}>
              <div className="left">
                <p className="time">{element.time}</p>
                <img src={element.image} alt="" />
              </div>
              <div className="right">
                <h2>{element.title}</h2>
                <p className="type">{element.type}</p>
                <div>
                  <span className="duration">{element.duration}</span>
                  {element.isUnseen && <li className="unseen">Inédit</li>}
                  {element.direct && <li className="direct">Direct</li>}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </main>
  );
};

export default ProgramList;
