import React from "react";
import "./DepartmentsDropDown.css"
import { Menu } from 'antd';

export const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                Первое отделение
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Второе отделение
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Третье отделение
            </a>
        </Menu.Item>
        <Menu.Item danger>Интенсивное отделение</Menu.Item>
    </Menu>
);
