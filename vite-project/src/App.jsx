import "./App.css";
import GetUser from "./useContext/GetUser";
import UpdateUser from "./useContext/UpdateUser";
import { UserProvider } from "./useContext/UserContext";

function App() {
  return (
    <UserProvider>
      <h1>React Hooks Excercise</h1>
      <h2>1. useContext:</h2>
      <GetUser />
      <UpdateUser />
      <h2 style={{marginTop: "60px"}}>2. useReducer:</h2>
    </UserProvider>
  );
}

export default App;
