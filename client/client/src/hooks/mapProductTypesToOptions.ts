import type { ProductType } from "../types/ProductType";
import type { Option } from "../routes/NewPost";

export default function mapProductTypesToOptions(productTypes: ProductType[]): Option[] {
  return productTypes.map((pt) => ({
    value: String(pt.id),
    label: pt.name,
  }));
}