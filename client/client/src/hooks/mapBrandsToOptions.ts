import type { Brand } from "../types/Brand";
import type { Option } from "../routes/NewPost";

export default function mapBrandsToOptions(brands: Brand[]): Option[] {
  return brands.map((b) => ({
    value: String(b.id),
    label: b.name,
  }));
}
