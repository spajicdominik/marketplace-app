import type { Option } from "../../../routes/NewPost";
import type { Country } from "../../../types/Country";

export default function mapCountriesToOptions(countries: Country[]): Option[] {
  return countries.map((c) => ({
    value: String(c.id),
    label: c.name,
  }));
}
