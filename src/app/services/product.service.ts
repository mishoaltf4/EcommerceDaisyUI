import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/product.interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:IProduct[] =
    [
    {
      "id": 1,
      "title": "Classic T-Shirt",
      "image": "imgs/Products/cover.png",
      "rating": 4.5,
      "isStock": true,
      "price": 19.99,
      "colors": ["Red", "Blue", "White"],
      "sizes": ["S", "M", "L", "XL"],
      "description": "A classic unisex T-shirt made of 100% cotton.",
      "reviews": [4, 5, 5, 4],
      "category": "T-Shirts,",
      "quantity": 1,
    },
    {
      "id": 2,
      "title": "Denim Jacket",
      "image": "imgs/Products/cover-1.png",
      "rating": 4.8,
      "isStock": true,
      "price": 49.99,
      "colors": ["Blue", "Black"],
      "sizes": ["M", "L", "XL"],
      "description": "Stylish and durable denim jacket perfect for any season.",
      "reviews": [5, 5, 4, 5],
      "category": "Jackets",
      "quantity": 1,
    },
    {
      "id": 3,
      "title": "Chinos Pants",
      "image": "imgs/Products/cover-2.png",
      "rating": 4.2,
      "isStock": false,
      "price": 34.99,
      "colors": ["Beige", "Navy", "Olive"],
      "sizes": ["S", "M", "L"],
      "description": "Comfortable and stylish chinos pants for casual and formal wear.",
      "reviews": [4, 4, 5, 3],
      "category": "Pants",
      "quantity": 1,
    },
    {
      "id": 4,
      "title": "Summer Dress",
      "image": "imgs/Products/cover-3.png",
      "rating": 4.7,
      "isStock": true,
      "price": 29.99,
      "colors": ["Yellow", "Pink", "Blue"],
      "sizes": ["XS", "S", "M", "L"],
      "description": "Lightweight and airy dress perfect for summer outings.",
      "reviews": [5, 4, 4, 5],
      "category": "Dresses",
      "quantity": 1,
    },
    {
      "id": 5,
      "title": "Hoodie Sweatshirt",
      "image": "imgs/Products/cover-4.png",
      "rating": 4.6,
      "isStock": true,
      "price": 39.99,
      "colors": ["Gray", "Black", "Navy"],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "description": "Comfortable hoodie with a kangaroo pocket and adjustable hood.",
      "reviews": [5, 4, 5, 4],
      "category": "Sweatshi,",
      "quantity": 1,
    },
    {
      "id": 6,
      "title": "Sports Shorts",
      "image": "imgs/Products/cover-5.png",
      "rating": 4.3,
      "isStock": false,
      "price": 24.99,
      "colors": ["Black", "Blue", "Gray"],
      "sizes": ["M", "L", "XL"],
      "description": "Breathable and flexible shorts for workouts and sports activities.",
      "reviews": [4, 4, 4, 5],
      "category": "Shorts",
      "quantity": 1,
    },
    {
      "id": 7,
      "title": "Flannel Shirt",
      "image": "imgs/Products/cover-6.png",
      "rating": 4.5,
      "isStock": true,
      "price": 27.99,
      "colors": ["Red Plaid", "Green Plaid"],
      "sizes": ["M", "L", "XL"],
      "description": "Warm and stylish flannel shirt for a casual look.",
      "reviews": [5, 4, 4, 4],
      "category": "Shirts",
      "quantity": 1,
    },
    {
      "id": 8,
      "title": "Cargo Pants",
      "image": "imgs/Products/cover-7.png",
      "rating": 4.4,
      "isStock": true,
      "price": 39.99,
      "colors": ["Khaki", "Gray", "Black"],
      "sizes": ["M", "L", "XL", "XXL"],
      "description": "Functional cargo pants with multiple pockets for storage.",
      "reviews": [4, 5, 4, 4],
      "category": "Pants",
      "quantity": 1,
    },
    {
      "id": 9,
      "title": "Puffer Jacket",
      "image": "imgs/Products/cover-8.png",
      "rating": 4.9,
      "isStock": false,
      "price": 89.99,
      "colors": ["Black", "Navy", "Red"],
      "sizes": ["M", "L", "XL"],
      "description": "Warm and lightweight puffer jacket for cold weather.",
      "reviews": [5, 5, 5, 5],
      "category": "Jackets",
      "quantity": 1,
    },
    {
      "id": 10,
      "title": "Graphic T-Shirt",
      "image": "imgs/Products/cover-5.png",
      "rating": 4.1,
      "isStock": true,
      "price": 22.99,
      "colors": ["White", "Black"],
      "sizes": ["S", "M", "L"],
      "description": "Trendy graphic T-shirt with a comfortable fit.",
      "reviews": [4, 4, 4, 3],
      "category": "Jackets",
      "quantity": 1,
    }
  ]

  constructor(private httpClient: HttpClient) {}

  getProducts(): IProduct[] {
    return this.products;
  }

  getProductsByCategory(category: string): IProduct[]{
    return this.products.filter(product => product.category === category);
  }

  getProductByID(id: number): IProduct {
    return <IProduct>this.products.find(product => product.id === id);
  }

}
