import type { Subcategory } from "../types/Subcategory";
import type { Option } from "../routes/NewPost";

export default function mapSubcategoriesToOptions(subcategories: Subcategory[]): Option[] {
  return subcategories.map((sc) => ({
    value: String(sc.id),
    label: sc.name,
  }));
}
