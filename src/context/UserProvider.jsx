import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import axios from "axios";
import { BASE_URL } from "../api/client";

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${BASE_URL}/users`
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        fetchUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;