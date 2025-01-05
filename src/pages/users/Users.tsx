import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUser } from "@/redux/features/user/userSlice";

import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector(selectUser);
  return (
    <div className="mt-10">
      <div className="flex justify-end items-center gap-2">
        <h1 className="mr-auto">Users</h1>

        {/* <AddTaskModal></AddTaskModal> */}
        <AddUserModal></AddUserModal>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {users.map((user) => (
          <UserCard user={user} key={user.id}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Users;
