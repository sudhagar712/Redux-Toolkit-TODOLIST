/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../StateManage/UseReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  const users = useSelector((state) => state.users.userList);


  const handleSubmit = (e) =>{
    e.preventDefault();
       if (name && email) {
        const newUser = {
          id:users.length > 0 ? users[users.length -1].id +1 :1,
          name,
          email:email,
        }
        dispatch(addUser(newUser));
       }

       setName("");
       setEmail("");
       navigate('/')

       toast.success('user Add Success',{
        position: 'top-center',
        autoClose: 1000
       })


      
      


  }

  
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-primary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              placeholder="name"
            required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              placeholder="email"
         required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="d-grid mt-4">
            <button className="btn btn-info" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
