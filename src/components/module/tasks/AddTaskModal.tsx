import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useCreateTaskMutation } from "@/redux/api/baseApi";
// import { addTask } from "@/redux/features/task/taskSlice";
// import { selectUser } from "@/redux/features/user/userSlice";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { TTask } from "@/types/typs";
// import { format } from "date-fns";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export function AddTaskModal() {
  const [open, setOpen] = useState(false);
  const form = useForm();
  const [createTask, { data, isLoading }] = useCreateTaskMutation();
  // const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // dispatch(addTask(data as TTask));
    const taskData = {
      ...data,
      isCompleted: false,
    };
    createTask(taskData);
    setOpen(false);
    form.reset();
    // console.log(taskData);
  };
  // const users = useAppSelector(selectUser);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          {" "}
          fill the form{" "}
        </DialogDescription>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>

        {/* form */}
        <Form {...form}>
          <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Title </FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Description </FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a priority to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* from field 2 */}
            <FormField
              control={form.control}
              name="user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a user to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {/* <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem> */}
                      {/* {users.map((user) => (
                        <SelectItem value={user.id} key={user.id}>
                          {user.name}
                        </SelectItem>
                      ))} */}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            " pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button className="mt-3" type="submit">
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
