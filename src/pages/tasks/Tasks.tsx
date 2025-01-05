import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { filterTask, selectTask } from "@/redux/features/task/taskSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector(selectTask);
  const dispatch = useAppDispatch();

  console.log(tasks);

  return (
    <div className="mt-10">
      <div className="flex justify-end items-center gap-2">
        <h1 className="mr-auto"> tasks</h1>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              onClick={() => dispatch(filterTask("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              // onClick={dispatch(filterTask("medium"))}
              onClick={() => dispatch(filterTask("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(filterTask("high"))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal></AddTaskModal>
      </div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}></TaskCard>
      ))}
    </div>
  );
};

export default Tasks;
