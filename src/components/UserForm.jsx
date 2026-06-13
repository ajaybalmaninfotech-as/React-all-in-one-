import { useState } from "react";

function UserForm() {
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Name:", form.name);
    console.log("Password:", form.password);
    console.log("Email:", form.email);
  }

  return (
    <form className="flex flex-col border p-3 gap-5" onSubmit={handleSubmit}>
      <span>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          // className="bg-red-700"
          placeholder="Enter Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </span>
      <span>
        <label htmlFor="name">Password: </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </span>

      <span>
        <label htmlFor="name">Email: </label>
        <input
          type="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </span>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
