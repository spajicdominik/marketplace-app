export interface OptionDto {
  id: number;
  name: string;
}

export interface SubcategoryOptionDto {
    id : number;
    name : string;
    categoryId : number;
}

export interface ProductTypeOptionDto {
    id : number;
    name : string;
    categoryId : number;
    subcategoryId : number;
}

export interface ProductOptionDto {
    id : number;
    name : string;
    categoryId : number;
    subcategoryId : number;
    productTypeId: number;
}

export interface SearchBarDto {
  categories : OptionDto[];
  subcategories : SubcategoryOptionDto[];
  productTypes : ProductTypeOptionDto[];
  products : ProductOptionDto[];
}