import { Button, Drawer, Space } from 'antd';
import Sidebar from '../sidebar/Sidebar';
import { IoIosMenu } from "react-icons/io";
import useFetchCategoryById from '../../hooks/useFetchCategoryById';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../store';
import sidebarSlice from '../../store/sidebarSlice';


export default function SideMenu({token} : {token : string | null}) {
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector(
    (state: RootState) => state.sidebar.open
  );
  const categoryId = useSelector((state : RootState)=> state.category.categoryId);

  const category = useFetchCategoryById(categoryId);

  const showDrawer = () => {
    dispatch(sidebarSlice.actions.showDrawer());
  };

  const onClose = () => {
    dispatch(sidebarSlice.actions.onClose());
  };

  return (
    <div className='pt-2'>
      <Space>
        <Button type="default" size="large" onClick={showDrawer}>
          <IoIosMenu />
        </Button>
      </Space>
      <Drawer
        title={category?.name}
        placement='left'
        closable={false}
        onClose={onClose}
        open={open}
        key='left'
      >
        <Sidebar token={token}></Sidebar>
      </Drawer>
    </div>
  );
};
