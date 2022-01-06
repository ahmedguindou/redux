import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions/TodoActions";

function EditTask({ el }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(el.task);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(editTask(el.id, text));
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;
