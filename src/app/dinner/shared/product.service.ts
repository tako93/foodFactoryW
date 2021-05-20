import { Injectable } from '@angular/core';
import { IProduct } from './product';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProduct(): IProduct[] {
    return [
      {
        imageUrl:
          'https://www.pngkit.com/png/full/359-3597252_free-food-plate-png-food-plate-above-png.png',
        productName: 'best',

        price: 36.997,
        rating: 4,
      },
      {
        imageUrl:
          'https://www.searchpng.com/wp-content/uploads/2019/01/Healthy-Food-PNG-Picture-715x710.png',
        productName: 'dinner',

        price: 22.998,
        rating: 5,
      },
      {
        imageUrl:
          'https://www.searchpng.com/wp-content/uploads/2019/01/Food-Transparent-PNG-Pictures-715x711.png',
        productName: 'for you!',

        price: 30.997,
        rating: 3,
      },
      {
        imageUrl:
          'https://www.freepnglogos.com/uploads/food-png/food-sutherland-foodservice-12.png',
        productName: 'for you!',

        price: 30.997,
        rating: 3,
      },
    ];
  }
}
