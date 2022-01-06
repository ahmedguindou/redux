import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/TodoActions";
function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Enter your Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
}
export default AddTask;
