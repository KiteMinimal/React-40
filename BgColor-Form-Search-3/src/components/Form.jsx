import React, { useState } from "react";

const Form = () => {
  const [details, setDetails] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const formHandlerSubmit = (e) => {
    e.preventDefault();
    console.log(details);

    if(details.confirmPassword !== details.password){
        alert("Password doesn't match!")
    }

    setDetails({
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div>
      <div>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f2f2f2",
          }}
          onSubmit={formHandlerSubmit}
        >
          <label htmlFor="">UserName</label>
          <input
            value={details.userName}
            onChange={(e) => {
              setDetails({
                ...details,
                userName: e.target.value,
              });
            }}
            type="text"
            placeholder="UserName"
          />
          <label htmlFor="">Email</label>
          <input
            value={details.email}
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
            type="email"
            placeholder="Email"
          />
          <label htmlFor="">Password</label>
          <input
            value={details.password}
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
            type="password"
            placeholder="Password"
          />
          <label htmlFor="">Confirm Password</label>
          <input
            value={details.confirmPassword}
            onChange={(e) => {
              setDetails({ ...details, confirmPassword: e.target.value });
            }}
            type="password"
            placeholder="Confirm Password"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
