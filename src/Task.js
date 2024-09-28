export default function Task({ task, toggleCompleted }) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={task.completed}
        onClick={() => {
          toggleCompleted(task.id, !task.completed);
        }}
      />
      <p>{task.title}</p>
    </div>
  );
}
