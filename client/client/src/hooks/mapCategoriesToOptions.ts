import type { Category } from "../types/Category";
import type { Option } from "../routes/NewPost";

export default function mapCategoriesToOptions(categories: Category[]): Option[] {
  return categories.map((c) => ({
    value: String(c.id),
    label: c.name,
  }));
}
