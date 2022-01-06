import AddTask from "./component/AddTask";
import ListTask from "./component/ListTask";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <AddTask />
      <br />
      <ListTask />
    </div>
  );
}
