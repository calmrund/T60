import { Menu, Icon } from 'antd';
import React from 'react';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Slider = (props) =>
  <Menu
    style={{ width: 240 }}
    defaultOpenKeys={['sub1']}
    mode="inline"
    theme="dark"
  >
    <Menu.Item key="sub1">
      <Icon type="mail" />首页
    </Menu.Item>
    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>权限管理</span></span>}>
      <Menu.Item key="5">权限分配</Menu.Item>
      <Menu.Item key="6">用户角色</Menu.Item>
    </SubMenu>
    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>生产数据管理</span></span>}>
      <Menu.Item key="9">选项9</Menu.Item>
      <Menu.Item key="10">选项10</Menu.Item>
    </SubMenu>
  </Menu>

export default Slider;
