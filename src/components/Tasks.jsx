import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete, selectedProjectId }) {
  const relevantTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );
  return (
    <section>
      <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {relevantTasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
