import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag } from "antd";
import Loader from "../components/Loader";
import Error from "../components/Error";

function AdminUserScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const columns = [
    { title: "userid", dataIndex: "_id", key: "_id" },
    { title: "name", dataIndex: "name", key: "name" },
    { title: "email", dataIndex: "email", key: "email" },
    {
      title: "isAdmin",
      dataIndex: "isAdmin",
      key: "isAdmin",
      render: (isAdmin) => (
        <>
          {isAdmin === true ? (
            <Tag color="green">YES</Tag>
          ) : (
            <Tag color="red">NO</Tag>
          )}
        </>
      ),
    },
  ];

  async function fetchUsers() {
    setError("");
    setLoading(true);
    try {
      const data = await axios.post("https://mern-project-6.onrender.com/api/users/getallusers");
      setUsers(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">Users</h1>
      <div className="table-responsive">
        {loading ? (
          <Loader />
        ) : error.length > 0 ? (
          <Error msg={error} />
        ) : (
          <Table columns={columns} dataSource={users} />
        )}
      </div>
    </div>
  );
}

export default AdminUserScreen;
