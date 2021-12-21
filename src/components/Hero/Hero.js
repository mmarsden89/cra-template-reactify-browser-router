import "./Hero.scss";
import ImageCycle from "./ImageCycle";

const Hero = () => {
  return (
    <div className="hero-container">
      <ImageCycle />
      <div className="text">
        <h1>thanks for choosing Reacticious</h1>
        <div className="subtext">
          <p>feel free to edit the code and publish however you please</p>
          <p>
            documentation can be found&nbsp;<a href="#">here</a> :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
