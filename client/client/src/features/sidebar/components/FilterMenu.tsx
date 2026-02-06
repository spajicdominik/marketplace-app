import { Button } from 'antd';

export default function FilterMenu({onSelectMinPrice, onSelectMaxPrice} : {onSelectMinPrice : (id: number) => void,onSelectMaxPrice : (id: number) => void}) 
{
    return <div>
        <div className="text-black text-center w-full">Filter by price (EUR)</div>
        <div className="flex justify-between w-full p-4">
            <input 
            type="text"
            onChange={(e) => onSelectMinPrice(parseInt(e.target.value))} 
            className="bg-gray-200 w-[40%] rounded-xl border border-black text-black text-center" 
            />
            <p>to</p>
            <input 
            type="text" 
            onChange={(e) => onSelectMaxPrice(parseInt(e.target.value))}
            className="bg-gray-200 w-[40%] rounded-xl border border-black text-black text-center" />
        </div>
    </div>
}