import type { Option } from "../../../routes/NewPost";
import type { County } from "../../../types/County";

export default function mapCountiesToOptions(counties: County[]): Option[] {
  return counties.map((c) => ({
    value: String(c.id),
    label: c.name,
  }));
}
