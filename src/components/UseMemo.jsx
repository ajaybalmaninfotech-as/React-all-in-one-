import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const users = [
    { id: 1, age: 20 },
    { id: 2, age: 15 },
    { id: 3, age: 25 },
  ];

  const adults = useMemo(() => {
    console.log("Filtering users");

    return users.filter(
      (user) => user.age >= 18
    );
  }, [users]);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <p>Total Adults: {adults.length}</p>
    </>
  );
}


export default UseMemo