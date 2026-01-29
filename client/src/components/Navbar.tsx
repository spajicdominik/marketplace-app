import { AntDesignOutlined } from '@ant-design/icons';

function Navbar() {
    return(
        <div className="flex bg-white h-20 border-b">
            <div className='flex items-center px-[56px]'>
                <a href="">
                <img src="src/assets/marketplace-icon.png" alt="" className='w-[32px]'/>
            </a>
            <a href="">
                <h1 className='text-3xl pl-3 font-semibold'>TechMarket</h1>
            </a>
            </div>
        </div>
    )
}

export default Navbar;