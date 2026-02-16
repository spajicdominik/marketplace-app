export default function ImageComponent ({url} : {url : string}) {
    return (
        <div className="w-full h-130 flex items-center justify-center">
            <img src={url} alt="" className="w-10/12 h-11/12 object-contain"/>
        </div>
    )
}