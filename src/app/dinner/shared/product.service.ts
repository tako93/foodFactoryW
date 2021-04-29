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
          'https://lh3.googleusercontent.com/proxy/Pb4gjkXjYzhWIZOgQi8B9mr89XETuiEsCmqeKMx4VkJT4jUVUSajS9GXZgp4_ZZtTjM5dMCrgjV_lz_PCs3S5Can4WFGj1pjZv1biVI4BvnbYKQ',
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
          'https://www.searchpng.com/wp-content/uploads/2019/01/Food-Transparent-PNG-Pictures-715x711.png',
        productName: 'for you!',

        price: 30.997,
        rating: 3,
      },
    ];
  }
}
