import {useEffect, useState} from "react";

function App() {
  const [users, setUsers] = useState([]);

  // GET REQUEST

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async() => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
      console.log("GET:", data);
    } catch (error) {
      console.log(error);
    }
  }

  // POST REQUEST

  const addUser = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "john",
            email: "john@gmail.com"
          }),
        });
      const data = await response.json();
      console.log("POST:", data);
    } catch (error) {
      console.log(error);
    }
  }

  // PUT REQUEST

  const updateUser = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            name: "Ram",
            email: "ram@gmail.com",
          }),
        }
      );
      const data = await response.json();
      console.log("PUT:", data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETTE REQUEST 

  const deleteUser  = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1",
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("DELETE: User deleted successfully" );
      }
    }catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>fetch Api methods </h1>
      <button onClick={getUsers}>GET</button>
      <button onClick={addUser}>POST</button>
      <button onClick={updateUser}>PUT</button>
      <button onClick={deleteUser}>DELETE</button>


      <h2>Users</h2>
      {users.map((user)=>(
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )

}

export default App;