import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {updateUser} from "../StateManage/UseReducer"
import { toast } from 'react-toastify';




const Update = () => {

     const {id} = useParams();
     const dispatch = useDispatch();
     const navigate = useNavigate();

      const users = useSelector((state) => state.users.userList);
      const existingUsers = users.filter((f) => f.id == id);

      const { name, email } = existingUsers[0];

   const [uname, setName] = useState(name);
   const [uemail, setEmail] = useState(email);

     

const handleUpdate = (e) =>{
    e.preventDefault();

    dispatch(updateUser({
        id:id,
        name:uname,
        email:uemail
    }))

navigate('/')
 toast.success("update is sucess")

}


  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-primary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          {/* Name */}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={uname}
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
              value={uemail}
              placeholder="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="d-grid mt-4">
            <button className="btn btn-info" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update
