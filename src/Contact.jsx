import React, {useState} from 'react';

const Contact = () =>{

const [data,setData] = useState({
  fullname: "",
  phone: "",
  email: "",
  message: "",
});

const InputEvent = (event) => {
  const {name,value} = event.target;

  setData((preVal) => {
    return {
      ...preVal,
      [name]: value,
    }
  })
}

const formSubmit = (e) => {
  e.preventDefault();
  
  alert(`My name is ${data.fullname}. My mobile no is ${data.phone}.Here i want to say ${data.message}`);
};

  return(
    <>
    
      <div className="my-5">
        <h1 className="text-center"> Conatct Us </h1>
      </div>
      <div className="container conatct_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Full Name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone</label>
              <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Mobile No" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} $S="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3"></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ); 
};
export default Contact;