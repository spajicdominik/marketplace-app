import CountrySelect from "../../location-select/CountrySelect"
import CountySelect from "../../location-select/CountySelect"
import CitySelect from "../../location-select/CitySelect"

export default function LocationFilter() {
    
    return (
        <div className="text-black mx-4">
            <h1 className="text-xl font-light mb-2 mt-4">Location</h1>
            <div className="flex flex-col">
                <CountrySelect></CountrySelect>
                <CountySelect></CountySelect>
                <CitySelect></CitySelect>
            </div>
        </div>
    )
}