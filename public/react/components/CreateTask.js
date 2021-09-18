import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priorityLevel, setPriorityLevel] = useState("");
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "assignedTo") {
      setAssignedTo(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "dueDate") {
      setDueDate(value);
    } else {
      setPriorityLevel(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["AssignedTo"] = assignedTo;
    taskObj["Description"] = description;
    taskObj["DueDate"] = dueDate;
    taskObj["PriorityLevel"] = priorityLevel;
    save(taskObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
      <form>
        <div className="form-group">
          <label class="form-lable required">Task Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>
        <br/>
        <div className="form-group">
          <label class="form-lable">Task Description</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
        <br/>
        <div className="form-group">
          <label class="form-lable">Assigned To</label>
          <input
            type="text"
            class="form-control"
            value={assignedTo}
            onChange={handleChange}
            name="assignedTo"
          ></input>
        </div>
        <br/>
        <div className="form-group">
          <label class="form-lable">Due Date</label>
          <input
            type="date"
            class="date"
            value={dueDate}
            onChange={handleChange}
            name="dueDate"
          ></input>

          <label class="Priority">Priority Level</label>
          <select
            className="select"
            value={priorityLevel}
            onChange={handleChange}
            name="priorityName"
          >
            <option value="0">Select:</option>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
