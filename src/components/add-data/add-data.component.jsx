import React, { createRef, useContext, useState } from "react";
import { AddDataContext } from "../providers/add-data.provider";
import "./add-data.styles.css";

const AddData = ({ addData }) => {
  const nameRef = createRef();
  const emailRef = createRef();
  const phoneNumberRef = createRef();
  const [id, setId] = useState(1);
  //   const { addDataToState } = useContext(AddDataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    console.log(name, email, phoneNumber);
    addData({ name, email, phoneNumber, id });
    setId(id + 1);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <input
            type="text"
            placeholder="Enter Your Name Here!"
            ref={nameRef}
          />
        </div>
        <div className="form-fields">
          <input
            type="email"
            placeholder="Enter Your Email Here!"
            ref={emailRef}
          />
        </div>
        <div className="form-fields">
          <input
            type="number"
            placeholder="Enter Your Phone Number Here!"
            maxLength="10"
            ref={phoneNumberRef}
          />
        </div>
        <button type="submit" className="button">
          Add Data
        </button>
      </form>
    </div>
  );
};

export default AddData;
