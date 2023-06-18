import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => {
    return state.user.value;
  });
  return (
    <div>
      <h1>Profile Components</h1>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.country}</div>
    </div>
  );
};

export default Profile;
