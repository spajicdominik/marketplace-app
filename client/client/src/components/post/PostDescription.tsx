import { Button } from 'antd';

function PostDescription({title, description, price, currency}: {title: string, description: string, price: string, currency: string}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='flex'>
                <h2>{price}{currency}</h2>
                <Button>Info</Button>
            </div>
        </div>
    );
}

export default PostDescription;