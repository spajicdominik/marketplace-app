import type { MenuProps } from "antd";

type BackendCategory = {
  subcategory_id: number;
  name: string;
  subcategory_items: {
    subcategory_item_id: number;
    name: string;
    products: {
      product_id : number,
      name: string;
    }[];
  }[];
};


export const mapCategoriesToMenuItems = (
  categories: BackendCategory[]
): MenuProps["items"] => {
  return categories.map(category => ({
    key: `subcategory-${category.subcategory_id}`,
    label: category.name,
    children: category.subcategory_items.map(item => ({
      key: `subcategory-item-${item.subcategory_item_id}`,
      label: item.name,
      children: item.products.map(product => ({
        key: `product-${product.product_id}`,
        label: product.name
      }))
    }))
  }));
};