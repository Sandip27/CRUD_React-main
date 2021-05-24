import React, { useContext } from "react";
import "./Home.css";
import { Button, Table } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [users, setUser] = useContext(UserContext);

  const addUser = () => {
    console.log("clicked");
    <Redirect to="/create" />;
  };

  return (
    <>
      <div className="page__carousel ">
        <Carousel onClick={addUser}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Link className="btn btn-light" to="/create">
                Add User
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Link className="btn btn-light" to="/create">
                Add User
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Link className="btn btn-light" to="/create">
                Add User
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="table">
        <Table striped bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone no.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={"/read/" + user.id}>
                    <Button className="action__btn" variant="outline-success">
                      Read
                    </Button>
                  </Link>
                  <Link to={"/edit/" + user.id}>
                    <Button className="action__btn" variant="outline-info">
                      Edit
                    </Button>
                  </Link>
                  <Link to={"/delete/" + user.id}>
                    <Button className="action__btn" variant="outline-danger">
                      Delete
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
