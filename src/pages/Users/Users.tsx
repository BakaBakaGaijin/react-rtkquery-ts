import { FC } from "react";
import { useNavigate } from "react-router-dom";
import UsersList from "../../components/UsersList/UsersList";
import { Divider } from "antd";
import { useGetUsersQuery } from "../../store/UserSlice";
import IUser from "../../models/IUser";

const Users: FC = () => {
  let { data, error, isLoading } = useGetUsersQuery(true);
  data = data || ([] as IUser[]);
  const navigate = useNavigate();

  const viewUser = (id: number) => {
    navigate(`/user/${id}`);
  };

  return (
    <>
      <Divider>Users</Divider>
      <UsersList data={data} loading={isLoading} onClick={viewUser} />
    </>
  );
};

export default Users;
