export interface IProductResponse {
  message: string;
  data: {
    id: number;
    title: string;
    description: string;
    category: string;
    status: string;
    imageBase64: string;
  };
}
