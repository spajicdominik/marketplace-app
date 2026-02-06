import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Item({ title }: { title: string }) {
    return (
        <Button><NavLink to={`/${title}`}>{title}</NavLink></Button>
    );
}

export default Item;