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
    { title: "userid", dataIndex: "_id", key: "_id", width: 150 },
    { title: "Name", dataIndex: "name", key: "name", width: 200 },
    { title: "Email", dataIndex: "email", key: "email", width: 250 },
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
      width: 100,
    },
  ];

  async function fetchUsers() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post("https://mern-project-6.onrender.com/api/users/getallusers")).data;
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
    <div className="row">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error msg={error} />
      ) : (
        <div className="col-md-12">
          <div className="table-responsive">
            <Table columns={columns} dataSource={users} scroll={{ x: true }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminUserScreen;
