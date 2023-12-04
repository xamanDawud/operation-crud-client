import { useLoaderData } from "react-router-dom";

const Update = () => {
  let loadedData = useLoaderData();

  let updateHandler = (e) => {
    e.preventDefault();
    let form = e.target;
    let name = form.name.value;
    let email = form.email.value;
    let user = { name, email };

    fetch(`http://localhost:5000/users/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <form onSubmit={updateHandler}>
        <input type="text" name="name" defaultValue={loadedData.name} id="" />
        <br />
        <input type="text" name="email" defaultValue={loadedData.email} id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Update;
