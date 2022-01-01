import { FaTimes } from "react-icons/fa";
function Task({ task, onDelete }) {
  return (
    <div>
      <h4>
        {task.text}{" "}
        <FaTimes className="btn bg-info"
          style={{
            color: "red",
            backgroundColor: "pink",
            padding: "2px",
            float: "right",
            marginRight: '20px',
            cursor: 'pointer'
          }} onClick={() => onDelete(task.id)}

        />
      </h4>
      <p> {task.date} </p>
    </div>
  );
}

export default Task;
