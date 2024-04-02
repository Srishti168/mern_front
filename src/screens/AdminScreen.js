import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import AdminBookingScreen from "./AdminBookingScreen";
import AdminRoomScreen from "./AdminRoomScreen";
import AdminUserScreen from "./AdminUserScreen";
import AdminAddRoomScreen from "./AdminAddRoomScreen";

const { TabPane } = Tabs;

function AdminScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user || user.isAdmin == false) {
      window.location.href = "/home";
    }
  }, []);

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">Admin Panel</h1>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="admin-tabs-container">
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="Bookings" key="1">
                <AdminBookingScreen />
              </TabPane>
              <TabPane tab="Rooms" key="2">
                <AdminRoomScreen />
              </TabPane>
              <TabPane tab="Add Room" key="3">
                <AdminAddRoomScreen />
              </TabPane>
              <TabPane tab="Users" key="4">
                <AdminUserScreen />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
      <style jsx>{`
        .admin-tabs-container .ant-tabs-content {
          overflow-x: auto;
        }

        @media screen and (max-width: 992px) {
          .admin-tabs-container .ant-tabs-content {
            overflow-x: hidden;
          }
        }
      `}</style>
    </div>
  );
}

export default AdminScreen;
