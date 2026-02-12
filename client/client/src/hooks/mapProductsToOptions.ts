import type { Product } from "../types/Product";
import type { Option } from "../routes/NewPost";

export default function mapProductsToOptions(products: Product[]): Option[] {
  return products.map((p) => ({
    value: String(p.id),
    label: p.name,
  }));
}
