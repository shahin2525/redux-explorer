export type TTask = {
  id: string;
  title: string;
  description: string;
  dueTime: string;
  isComplete: boolean;
  priority: "low" | "medium" | "high";
};
