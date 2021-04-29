import { Component, OnInit } from '@angular/core';
import { IProduct } from './shared/product';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss'],
})
export class DinnerComponent implements OnInit {
  private _filterValue: string = '';

  showImages: boolean = false;
  filteredProducts: IProduct[] = [];

  productList: IProduct[] = [
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

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.productList = this._productService.getProduct();
    this.filterValue = '';
  }

  ngOnDestroy(): void {}

  get filterValue(): string {
    return this._filterValue;
  }
  set filterValue(value: string) {
    this._filterValue = value;
    if (this._filterValue) {
      this.filteredProducts = this.productList.filter((p) => {
        return p.productName
          .toLowerCase()
          .includes(this._filterValue.toLowerCase());
      });
    } else {
      this.filteredProducts = this.productList.slice();
    }
  }

  onRatingChange(message: number): void {
    console.log(message);
  }
}
