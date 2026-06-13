import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import UserTable from "../components/userTable";
import UseMemo from "../components/UseMemo";

const Contact = () => {
  const navigate = useNavigate();
  const { users, loading } = useUser();

  const serviceHandler = () => {
    navigate("/service");
  };

  const homeHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-3 w-full h-full">
      <button onClick={serviceHandler}>Go to Service</button>
      <button onClick={homeHandler}>Go to Home</button>
      vdbfgnhgfghrtfuhfyghu
      <div>{loading ? <h1>Loading...</h1> : <UserTable user={users} />}</div>
      {/* //Use Memo */}
      <UseMemo />
    </div>
  );
};

export default Contact;
