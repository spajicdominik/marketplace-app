import { Button } from 'antd';

function Item({ title }: { title: string }) {
    return (
        <Button>{title}</Button>
    );
}

export default Item;