import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import UserTable from "../components/userTable";
import useUser from "../hooks/useUser";

const Home = () => {
  const navigate = useNavigate();

  const { users, loading } = useUser();

  const serviceHandler = () => {
    navigate("/service");
  };

  const contactHandler = () => {
    navigate("/contact");
  };

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <UserForm />

      <button onClick={serviceHandler}>Go to Service</button>

      <button onClick={contactHandler}>Go to Contact</button>

      {loading ? <h1>Loading...</h1> : <UserTable user={users} />}
    </div>
  );
};

export default Home;
