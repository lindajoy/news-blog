export interface Category {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface CategoriesApiResponse {
  status: string;
  categories: Category[];
}

export interface SearchResult {
  id: number;
  title: string;
  slug?: string;
}

export interface SearchApiResponse {
  status: string;
  blog: SearchResult[];
}

export interface BlogApiResponse {
  status: string;
  blog: {
    id: number;
    title: string;
    slug: string;
  };
}