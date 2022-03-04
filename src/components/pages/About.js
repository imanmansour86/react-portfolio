import React from "react";

const About = () => {
  return (
    <div className="container">
      <div>
        <h3>About me</h3>
        <div className="row">
          <div className="col-md-8 .col-xs-12">
            <p>
              {" "}
              Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
              // Integer gravida dui mauris, ut interdum nunc egestas sed.
              Aenean sed // mollis diam. Nunc aliquet risus ac finibus porta.
              Nam quis arcu non // lectus tincidunt fermentum. Suspendisse
              aliquet orci porta quam semper // imperdiet. Praesent euismod mi
              justo, faucibus scelerisque risus // cursus in. Sed rhoncus mollis
              diam, sit amet facilisis lectus blandit // at. imperdiet. Praesent
              euismod mi justo, faucibus scelerisque risus // cursus in. Sed
              rhoncus mollis diam, sit amet facilisis lectus blandit // at.
            </p>
          </div>
          <div className="col-md-4 .col-xs-6">
            <img className="my-image" src={require(`../../assets/iman.png`)} />
          </div>
        </div>
      </div>
    </div>

    // <div className="form">
    //   <h1 className="card-title">About Page</h1>

    //   <div>
    //     <div className="image">
    //       <img className="my-image" src={require(`../../assets/iman.png`)} />
    //     </div>

    //     <p>
    //       Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
    //       Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
    //       mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
    //       lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
    //       imperdiet. Praesent euismod mi justo, faucibus scelerisque risus
    //       cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit
    //       at.
    //     </p>
    //   </div>
    // </div>
  );
};

export default About;
