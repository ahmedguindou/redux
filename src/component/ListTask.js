import { useSelector } from "react-redux";
import { useState } from "react";
import Task from "./Task";
import { Button } from "react-bootstrap";

function ListTask() {
  const [filter, setFilter] = useState(false);
  const [done, setDone] = useState(true);

  const todos = useSelector((state) => state.todoReducer.todos);
  return (
    <div>
      <Button variant="primary" onClick={() => setFilter(false)}>
        show all
      </Button>{" "}
      <Button
        variant="secondary"
        onClick={() => {
          setFilter(true);
          setDone(false);
        }}
      >
        show not done
      </Button>{" "}
      <Button
        variant="success"
        onClick={() => {
          setFilter(true);
          setDone(true);
        }}
      >
        show done
      </Button>{" "}
      <br />
      <br />
      {!filter
        ? todos.map((el) => <Task key={el.id} el={el} />)
        : done
        ? todos
            .filter((el) => el.done)
            .map((el) => <Task key={el.id} el={el} />)
        : todos
            .filter((el) => !el.done)
            .map((el) => <Task key={el.id} el={el} />)}
    </div>
  );
}
export default ListTask;
