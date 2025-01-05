export type TTask = {
  id: string;
  title: string;
  description: string;
  dueTime: string;
  isComplete: boolean;
  priority: "low" | "medium" | "high";
};

// Define a type for the slice state
export type TUser = {
  name: string;
  id: string;
};
