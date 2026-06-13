import { useNavigate } from "react-router-dom";
import UserTable from "../components/userTable";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";

const Service = () => {
  const navigate = useNavigate();
  const { users, loading } = useUser();

  const homeHandler = () => {
    navigate("/");
  };

  const contactHandler = () => {
    navigate("/service");
  };

  return (
    <div className="flex flex-col gap-5">
      <button onClick={homeHandler}>Go to Home</button>
      <button onClick={contactHandler}>Go to Contact</button>
      {loading ? <h1>Loading...</h1> : <UserTable user={users} />}
    </div>
  );
};

export default Service;
