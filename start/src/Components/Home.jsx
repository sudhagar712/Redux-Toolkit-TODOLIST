import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../StateManage/UseReducer";
import { toast } from "react-toastify";


const Home = () => {
  const users = useSelector((state) => state.users.userList);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("Deleting user with ID:", id);
    dispatch(deleteUser({ id }));
    toast.success("User deleted successfully", {
      position: "top-center",
      autoClose:900,
      
    });
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">CRUD App</h2>
      <Link to="/create">
        <button className="btn btn-success mb-5">Create +</button>
      </Link>

      <table className="table table-primary table-striped-columns">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="d-flex justify-content-center gap-3">
                  <Link to={`/edit/${user.id}`}>
                    <button className="btn btn-primary">EDIT</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)} 
                    className="btn btn-danger"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
