import React, { useState } from "react";

const Searchbar = () => {
  // s2
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  //   s4
  const addTask = () => {
    // console.log("Task added:", input);

    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  //   s6

  const toggleDone = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };
  return (
    <div className="min-h-screen  flex flex-col items-center p-4 ">
      <div className="flex gap-2 mb-4">
        {/* s1 */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTask();
          }}
          type="text"
          placeholder="enter your tasks "
          className="bg-white border border-gray-400 px-4 py-2 rounded w-64 focus:outline-none"
        />

        {/* s3 */}
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          {" "}
          add
        </button>
      </div>
      {/* s5 */}
      <ul className="w-full max-w-md space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="bg-white px-4 py-2 rounded shadow">
            {/* s7 */}
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleDone(task.id)}
            />
            <span className={task.done ? "line-through text-gray-400" : ""}>
              {" "}
              {task.text}
            </span>

            {/* s8 */}
            <button
              className="text-red-500 hover:text-red-700 cursor-pointer ml-auto"
              onClick={() => deleteTask(task.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Searchbar;
