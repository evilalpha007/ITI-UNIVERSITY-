import React, { useState } from "react";
import HowToUse from "./API/howToUse";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(HowToUse);

  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/starktower.png" alt="stark" />
            </div>
            {/* first section right side */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">our representative ITI</h3>
              <h1 className="main-heading">how to connect with us </h1>
              {aboutData.map((curElem) => { 
const {id, title, info} = curElem;

                  return (
                    <>
                      <div className="row our-services-info" key={id}>
                        <div className="col-1 our-services-number">{id}</div>
                        <div className="col-10 our-services-data">
                          <h2>{title}</h2>
                          <p className="main-hero-para">
                          {info}
                          </p>
                        </div>
                      </div>
                    </>
                  );
               
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>
{/* right side bar  */}
<section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
           
            {/* secot section right side */}
            <div className="col-12 col-lg-7 our-services-rightside d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">our representative ITI</h3>
              <h1 className="main-heading">how to connect with us </h1>
              {aboutData.map((curElem) => { 
const {id, title, info} = curElem;

                  return (
                    <>
                      <div className="row our-services-info" key={id}>
                        <div className="col-1 our-services-number">{id}</div>
                        <div className="col-10 our-services-data">
                          <h2>{title}</h2>
                          <p className="main-hero-para">
                          {info}
                          </p>
                        </div>
                      </div>
                    </>
                  );
               
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="https://www.kolpaper.com/wp-content/uploads/2021/04/iPhone-Stark-Industries-Wallpaper-3.jpg" alt="stark" />
            </div>

          </div>
        </div>
      </section>


    </>
  );
};
export default Aboutus;
