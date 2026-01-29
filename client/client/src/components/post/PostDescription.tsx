import { Button } from 'antd';

function PostDescription({title, description, price}: {title: string, description: string, price: string}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='flex'>
                <h2>{price}</h2>
                <Button>Info</Button>
            </div>
        </div>
    );
}

export default PostDescription;