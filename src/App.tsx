import "./App.css";
import { User } from "./interfaces";

function App() {
  const user: User = {
    id: "123",
    last_name: "last",
    first_name: "first",
    email_address: "email@email.com",
    is_verified: true,
  };

  const handleClick = () => {
    if (user) {
      //perform operations here
    } else {
      //operation
    }
  };

  return (
    <div>
      {user && <p>truthy</p>}
      {user.id || "sdfsdfsdf"}
      <h1>Typescript Demo</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
