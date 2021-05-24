import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sandip Chowdhury",
      email: "sandip@gmail.com",
      phone: 9657863125,
    },
    { id: 2, name: "Tanuj Dutta", email: "xyz@gmail.com", phone: 9657863125 },
    { id: 3, name: "Abhishek Das", email: "abc@gmail.com", phone: 9486325869 },
    { id: 4, name: "Rohan Prasad", email: "rr@gmail.com", phone: 9874563214 },
    { id: 5, name: "Vivek Sarma", email: "vv@gmail.com", phone: 9123456789 },
  ]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
