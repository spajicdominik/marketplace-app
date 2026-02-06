import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Sell',
    key: 'sell'
  },
  {
    label: 'Featured',
    key: 'featured'
  },
  {
    label: 'Shop',
    key: 'shop'
  },
  {
    label: 'Login',
    key: 'login'
  }
];

const NavbarItems: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} disabledOverflow={true}/>;
};

export default NavbarItems;