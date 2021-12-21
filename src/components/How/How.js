import "./How.scss";
import coder from "../../assets/coder.jpg";

const How = () => {
  return (
    <div className="how-container">
      <img src={coder} className="how-background" />
      <div className="box">
        <h1>how it works</h1>
        <p className="how-text">
          just like any other create-react-app, you can remove all boilerplate
          code or rework the pre-coded components to suit your needs
        </p>
        <div className="list">
          <p>feel free to fork and clone the repo</p>
          <p>or</p>
          <p>run this command from your terminal</p>
        </div>
        <div className="command">npx create-react-app reactify</div>
      </div>
    </div>
  );
};

export default How;
