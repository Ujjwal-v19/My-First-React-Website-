import React from "react";

function Contact() {
  const  submitted=(e)=>{
    e.preventDefault();
  
  alert("Message Sent")
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 offset-md-3 mx-auto" >
          <form onSubmit={submitted}>
            <div className="mb-3  ">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Mobile No.
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Mobile Number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">
                Submit form
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
