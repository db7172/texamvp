import { BellOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Badge, Menu, Popover } from "antd";

const LogedIn = () => {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>

      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>

      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div className="tw-flex tw-items-center tw-gap-10">
      <Badge dot={true}>
        <Popover content={menu} title="Title" trigger="click">
          <BellOutlined className="tw-text-lg tw-text-secondary-color" />
        </Popover>
      </Badge>
      {/* <Dropdown
        className="tw-cursor-pointer"
        overlay={menu}
        trigger={["click"]}
        > */}
      <Popover className="tw-cursor-pointer" content={menu} trigger="click">
        <div>
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            className="tw-mr-2"
          />
          <DownOutlined className="tw-text-xs tw-text-secondary-color" />
        </div>
        {/* </Dropdown> */}
      </Popover>
    </div>
  );
};

export default LogedIn;
