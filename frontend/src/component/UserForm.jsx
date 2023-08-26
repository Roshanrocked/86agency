import React from "react";
import axios from "axios";
import { useState } from "react";
export default function UserForm() {
  const [data, setData] = useState({});

  function handlesubmit(e) {
    e.preventDefault();
    axios
      .post(`https://lime-worried-xerus.cyclic.cloud/users`, data)
      .then((data) => {
        console.log(data.data._id);
        localStorage.setItem("userID", data.data._id);
      });
  }
  const handlechange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <div>
        <h1 className="heading">create user</h1>
        <form onSubmit={handlesubmit}>
          <label htmlFor="">name</label>
          <input
            type="text"
            name="name"
            maxlength="50"
            onChange={handlechange}
            required
          />
          <label htmlFor="">email</label>
          <input type="text" name="email" onChange={handlechange} required />
          <label htmlFor="">bio</label>
          <input
            type="text"
            name="bio"
            maxlength="200"
            onChange={handlechange}
            required
          />
          <input className="button-4" type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}
