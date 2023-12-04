import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

const Users = () => {
  let loadedData = useLoaderData();
  let [users, setUsers] = useState(loadedData);

  let deleteHandler = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("User Delete Successfully");
        } else {
          alert("Not Deleted");
        }

        let remaining = users.filter((user) => user._id !== _id);
        setUsers(remaining);
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <div>
      <h1>All Users in here!!</h1>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} ID:- {user._id}
          <Link to={`/users/${user._id}`}>
            {" "}
            <button>Update</button>
          </Link>
          <button
            onClick={() => {
              deleteHandler(user._id);
            }}
          >
            X
          </button>
        </p>
      ))}
      <button>
        <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
};

export default Users;
