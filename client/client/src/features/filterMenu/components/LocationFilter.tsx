import CountrySelect from "../../location-select/CountrySelect"
import CountySelect from "../../location-select/CountySelect"

export default function LocationFilter() {
    
    return (
        <div className="text-black mx-4">
            <h1 className="mb-1">Location</h1>
            <div className="flex">
                <CountrySelect></CountrySelect>
                <CountySelect></CountySelect>
            </div>
        </div>
    )
}