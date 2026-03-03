import { Image } from 'antd';

export default function ImageComponent ({url} : {url : string}) {
    return (
        <div className="w-full h-130 flex items-center justify-center">
            <Image height={520} src={url} alt="basic" style={{ objectFit: "cover"}}/>
        </div>
    )
}