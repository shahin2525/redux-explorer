import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TUser } from "@/types/typs";
import { Trash2 } from "lucide-react";
type TUserProps = {
  user: TUser;
};
const UserCard = ({ user }: TUserProps) => {
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };
  return (
    <div className="w-full bg-black shadow-md rounded-lg px-5 py-3  border-2 border-red-200 mt-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{user?.name}</h3>

        <Button
          // onClick={() => dispatch(deleteState(task.id))}
          onClick={() => handleDelete(user?.id)}
          variant="link"
          className="p-0 text-red-500 hover:text-red-700 "
        >
          <Trash2></Trash2>
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
