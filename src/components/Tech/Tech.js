import "./Tech.scss";
import techLibrary from "../../../package.json";

const Tech = () => {
  const libraryMap = Object.keys(techLibrary.dependencies);

  const libraryHTML = libraryMap.map((itm) => <div key={itm}>{itm}</div>);

  return (
    <div className="tech-container">
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
        <path
          d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
          style={{ fill: "rgb(93, 152, 160)" }}
        ></path>
      </svg>
      <h1>what this template uses</h1>
      <div className="tech-info">
        <h2>
          I use this template for a specific use case but here's what comes
          under the hood
        </h2>
        <div className="tech-list">{libraryHTML}</div>
      </div>
    </div>
  );
};

export default Tech;
