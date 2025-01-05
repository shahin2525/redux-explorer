export type TTask = {
  id: string;
  title: string;
  description: string;
  dueTime: string;
  isComplete: boolean;
  priority: "low" | "medium" | "high";
  user: "string" | null;
};

// Define a type for the slice state
export type TUser = {
  name: string;
  id: string;
};
