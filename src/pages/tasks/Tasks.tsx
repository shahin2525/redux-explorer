import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector(selectTask);

  console.log(tasks);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <h1>i am from tasks</h1>
        <AddTaskModal></AddTaskModal>
      </div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}></TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
