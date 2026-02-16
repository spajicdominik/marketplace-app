import { Image } from 'antd';

export default function ImageComponent ({url} : {url : string}) {
    return (
        <div className="w-full h-130 flex items-center justify-center">
            <Image width={450} src={url} alt="basic" style={{ objectFit: "contain"}}/>
        </div>
    )
}