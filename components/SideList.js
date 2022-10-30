import { Divider, List, Typography } from "antd";
import React from "react";
const data = [
  "Search Event",
  "Create Event",
  "Join Virtual Event",
  "Your Stats",
];
const SideList = () => (
  <>
    <List
      size="large"
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);
export default SideList;
