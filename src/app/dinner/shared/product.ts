export interface IProduct {
  imageUrl: string;
  productName: string;
  price: number;
  rating: number;
}



export class Product implements IProduct {
  imageUrl: string = '';
  productName: string = '';
  price: number = 0;
  rating: number = 0;


}
