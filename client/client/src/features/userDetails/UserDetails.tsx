import useFetchUserDetails from '../../hooks/userDetails/useFetchUserDetails';
import UserPreview from './components/UserPreview';
import { IoLocationOutline } from "react-icons/io5";
import useFetchPostDetails from '../../hooks/postDetails/useFetchPostDetails';
import useFetchLocationDto from '../../hooks/userDetails/useFetchLocation';

export default function UserDetails({postId} : {postId : number}) {
    const postDetails = useFetchPostDetails(postId);
    const userDetails = useFetchUserDetails(postDetails?.userId);
    const location = useFetchLocationDto(postDetails?.location.cityId);

    return (
        <div className="w-fit h-fit bg-white text-black shadow-2xl m-4">
            <UserPreview userDetails={userDetails} postId = {postId}/>
            <div className='flex items-center p-4'>
                <IoLocationOutline />
                <div>
                    <h1 className='ml-3'>{location?.cityName}, {location?.countyName}, {location?.countryName}</h1>
                    <h1 className='ml-3 font-light'>{postDetails?.location.addressLine1}, {postDetails?.location.postalCode}</h1>
                </div>
                
            </div>
        </div>
    )
}