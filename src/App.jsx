
import {Link} from 'react-router-dom'
import "./App.css";

function App() {
  let submitHandler = (e) => {
    e.preventDefault();
    let form = e.target;
    let name = form.name.value;
    let email = form.email.value;
    let user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("User added on Database");
        }
        form.reset();
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <>
      <h1>
        Operation Crud <Link to={"/users"}>Users</Link>
      </h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
