import React from "react";
import Zoom from "react-reveal/Slide";

const About = () => {
  return (
    <div className="container">
      <div>
        <Zoom left>
          <h3>About me</h3>
        </Zoom>
        <div className="row">
          <div className="col-md-8 .col-xs-12">
            <p>
              {" "}
              Hello! I am a Full Stack Web Developer with work experience in
              Quality Assurance. I have a BE in Computer Engineering and Masters
              in Engineering Managment with a minor in Political Studies. I love
              solving problems and working on new challenges everyday. I also
              love to learn new skills and enjoy building user friendly
              websites. My work experience helps me visualize the best version
              of the app that is intuitive as well as functional. Based in San
              Jose, CA.
            </p>
          </div>
          <div className="col-md-4 .col-xs-6">
            <img className="my-image" src={require(`../../assets/iman.png`)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
