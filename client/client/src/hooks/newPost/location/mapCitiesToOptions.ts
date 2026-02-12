import type { Option } from "../../../routes/NewPost";
import type { City } from "../../../types/City";

export default function mapCitiesToOptions(cities: City[]): Option[] {
  return cities.map((c) => ({
    value: String(c.id),
    label: c.name,
  }));
}
