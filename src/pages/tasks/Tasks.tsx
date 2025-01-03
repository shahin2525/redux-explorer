import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector(selectTask);

  console.log(tasks);

  return (
    <div>
      <h1> i am form tasks</h1>
      {tasks.map((task) => (
        <TaskCard task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
