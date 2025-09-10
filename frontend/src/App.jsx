import { useEffect, useState } from "react";
import "./App.css";

const url = "http://localhost:5000/api/auth/users";
function App() {
  const [message, setmessage] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url, { method: "GET" });
        if (!response) {
          throw new Error("server error ");
        }
        const data = await response.json();
        setmessage(data);
      } catch (err) {
        console.log(err.stack);
        setmessage("someting went wrong");
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      <div>
        {message.map((user) => (
          <div key={user.id}>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phonenumber}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
