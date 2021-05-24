import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./Edit.css";
import { useState } from "react";

const Edit = () => {
  const [users, setUser] = useContext(UserContext);
  const { id } = useParams();
  const user = users.filter((user) => user.id == id);

  const [name, setName] = useState(user[0].name);
  const [email, setEmail] = useState(user[0].email);
  const [phone, setPhone] = useState(user[0].phone);

  const editName = (e) => {
    setName(e.target.value);
    const edited_name = name;
    user[0].name = edited_name;
  };

  const editEmail = (e) => {
    setEmail(e.target.value);
    const edited_email = email;
    user[0].email = edited_email;
  };

  const editPhone = (e) => {
    setPhone(e.target.value);
    const edited_phone = phone;
    user[0].phone = edited_phone;
  };

  const editUser = (e) => {
    e.preventDefault();
    setUser([...users]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
            <h1>ID NO: {user[0].id}</h1>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={editName}
            placeholder={user[0].name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={email}
            onChange={editEmail}
            placeholder={user[0].email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone no.</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={phone}
            onChange={editPhone}
            placeholder={user[0].phone}
          />
        </Form.Group>
        <Link to="/">
          <Button onSubmit={() => editUser} variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;
