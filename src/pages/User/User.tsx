import { FC } from "react";
import UserCard from "../../components/UserCard/UserCard";
import { Divider } from "antd";
import { useParams } from "react-router-dom";
//
import { useGetUserByIdQuery } from "../../store/UserSlice";
//
const User: FC = () => {
  let { id } = useParams();
  id = id as string;

  const { data, error, isLoading } = useGetUserByIdQuery(id);

  return (
    <>
      <Divider>User</Divider>
      <UserCard data={data || null} loading={isLoading} />
    </>
  );
};

export default User;
