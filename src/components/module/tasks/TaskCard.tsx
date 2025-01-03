import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { TTask } from "@/types/typs";
import { Trash2 } from "lucide-react";
// import { Checkbox } from "@";
type TProps = {
  task: TTask;
};

const TaskCard = ({ task }: TProps) => {
  return (
    <div className="w-full bg-black shadow-md rounded-lg px-5 py-3  border-2 border-red-200 mt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "low",
              "bg-yellow-500": task.priority === "medium",
              "bg-red-500": task.priority === "high",
            })}
          ></div>
          <h3 className="text-lg font-semibold">{task.title}</h3>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant="link"
            className="p-0 text-red-500 hover:text-red-700 "
          >
            <Trash2></Trash2>
          </Button>
          <Checkbox></Checkbox>
        </div>
      </div>
      <p className="text-gray-600">{task.description}</p>
    </div>
  );
};

export default TaskCard;
