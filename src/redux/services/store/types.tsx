export interface IGetProductsResponse {
  page: number;
  size: number;
  total: number;
  debug: null;
  previous_page: null;
  next_page: null;
  items: ICloudProduct[];
}

export interface ICloudProduct {
  name: string;
  description: null;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: null;
  unavailable: boolean;
  unavailable_start: null;
  unavailable_end: null;
  id: string;
  parent_product_id: null;
  parent: null;
  organization_id: string;
  product_image: any[];
  categories: any[];
  date_created: Date;
  last_updated: Date;
  user_id: string;
  photos: IPhotos[];
  current_price: ICurrentPrice[];
  is_deleted: boolean;
  available_quantity: number;
  selling_price: null;
  discounted_price: null;
  buying_price: null;
  extra_infos: null;
}

export interface ISingleCloudProduct {
  name: string;
  description: null;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: null;
  unavailable: boolean;
  unavailable_start: null;
  unavailable_end: null;
  id: string;
  parent_product_id: null;
  parent: null;
  organization_id: string;
  product_image: any[];
  categories: any[];
  date_created: Date;
  last_updated: Date;
  user_id: string;
  photos: IPhotos[];
  current_price: number;
  is_deleted: boolean;
  available_quantity: number;
  selling_price: null;
  discounted_price: null;
  buying_price: null;
  extra_infos: null;
}

export interface ICurrentPrice {
  NGN: Array<any[] | number | null>;
}

export interface IPhotos {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: number;
}

export interface IGetProducts {
  params: {
    page: number;
    size: number;
    // Appid: string;
    // Apikey: string;
    reverse_sort: boolean;
    // organization_id: string;
  };
}

export interface IGetSingleProduct {
  params: {
    page: number;
    size: number;
    // Appid: string;
    // Apikey: string;
    reverse_sort: boolean;
    // organization_id: string;
  };
  productId: string;
}
