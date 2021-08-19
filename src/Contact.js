import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className=" row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo5tEBZVPdTjuAXNLQ1ncylWZeknL74QYsQ&usqp=CAU"
                      alt="university"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* { right side contact form } */}
                <div className=" contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="first name"
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="last name"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="phone number"
                          required
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Add address"
                          required
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Enter your message"

                        />
                      </div>
                    </div>
                    <div className="form-check form-check-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                        required
                      />
                      <label class="form-check-label" className="main-hero-para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eaque alias similique.
                      </label>
                    </div>
                    <button type="submit" className="btn-style">
                      submit
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
