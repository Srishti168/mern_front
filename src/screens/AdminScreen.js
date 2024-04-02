import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import AdminBookingScreen from "./AdminBookingScreen";
import AdminRoomScreen from "./AdminRoomScreen";
import AdminUserScreen from "./AdminUserScreen";
import AdminAddRoomScreen from "./AdminAddRoomScreen";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function AdminScreen() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user || user.isAdmin == false) {
      window.location.href = "/home";
    }
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-4">Admin Panel</h1>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
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
  );
}

export default AdminScreen;
