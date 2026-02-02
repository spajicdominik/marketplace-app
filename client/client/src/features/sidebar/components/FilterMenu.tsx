import { Button } from 'antd';

export default function FilterMenu() {
    return <div>
        <div className="text-black text-center w-full">Filter by price (EUR)</div>
        <div className="flex justify-between w-full p-4">
            <input type="text" className="bg-gray-200 w-[40%] rounded-xl border border-black text-black text-center" />
            <p>to</p>
            <input type="text" className="bg-gray-200 w-[40%] rounded-xl border border-black text-black text-center" />
        </div>
        <Button>SEARCH</Button>
    </div>
}