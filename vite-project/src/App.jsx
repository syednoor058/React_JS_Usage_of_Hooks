import "./App.css";
import Todo from "./customHook/Todo";
import GetUser from "./useContext/GetUser";
import UpdateUser from "./useContext/UpdateUser";
import { UserProvider } from "./useContext/UserContext";
import Counter from "./useReducer/Counter";
import FocusInput from "./useRef/FocusInput";
import Timer from "./useRef/Timer";

function App() {
  return (
    <UserProvider>
      <h1>React Hooks Excercise</h1>
      <h2>1. useContext:</h2>
      <GetUser />
      <UpdateUser />
      <h2 style={{marginTop: "60px"}}>2. useReducer:</h2>
      <Counter />
      <h2 style={{marginTop: "60px"}}>3. useRef:</h2>
      <FocusInput />
      <Timer />
      <h2 style={{marginTop: "60px"}}>4. Custom Hook:</h2>
      <Todo />
    </UserProvider>
  );
}

export default App;
