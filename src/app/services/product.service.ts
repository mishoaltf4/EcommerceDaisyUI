import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products:IProduct[] =
    [
    {
      "id": 1,
      "title": "Classic T-Shirt",
      "image": "https://s3-alpha-sig.figma.com/img/7f43/9f88/3d50177232901e42884d41bd843ec040?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJszGs3JWIne70tLr9UXQsrZpFtgRqwOnR71awP2McpuwCIIU~0zjqLhBxg3A2DHvGGXlOj9BDLE22oNHa-BdmFYFiGD0PsdpTZ4uQf9O0DxBSAr2FNFp4h7AW91WbP3Ei8MR4z6wG0k4pIVtRVat4oGTTUbNHih4xCIxC~3-HP-nS~FLm9lpnSLz7avJbx2-IVbk5neykh6CpHKqMTy8I1VHW7Hir0IVdja4oBWFZ-T85OkLmI2O280qKictLpjxZP1meERbjAUMhxP9WVqjsCH2r9lXCdJGrCFbUO34H1x1Or-rXS9ZUR5LOeyE0FmQCQI8oOf6En0yRSk7qca3g__",
      "rating": 4.5,
      "isStock": true,
      "price": 19.99,
      "colors": ["Red", "Blue", "White"],
      "sizes": ["S", "M", "L", "XL"],
      "description": "A classic unisex T-shirt made of 100% cotton.",
      "reviews": [4, 5, 5, 4],
      "category": "T-Shirts"
    },
    {
      "id": 2,
      "title": "Denim Jacket",
      "image": "https://s3-alpha-sig.figma.com/img/ea93/867c/9c00620075282720d457a68b74f69a40?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KHmhFIOrnOVlag9DO8WPqTzMWY3xIWYMFic6t9thHL0eqS9Dhfrze--XuODzHioRV83W2HTEBVfsmE0pWOwGw2eg8rvr3Fh-SvdCRqNZXvaMnxMqEHu9EDRwKuh6EoVOtaPZFI5DGt7WuAsEbRJz~eL46ffnsEDJy8iE0I7qoTZPxgT69VG-ZTbSwZQCGzddemTTKKzTuLbtQ37j58Xr4KnuknUbjzaRaRERFwwDWcA3B3o8mWwxgKFFevzEtJZJRR~SJG31HCffDHDfG1P6o73pF126mbQlR9n7dAIsGpXQ3J6gPDnhfSM9k~CzYTA94WP23T0-ydatFcgBkzCG~Q__",
      "rating": 4.8,
      "isStock": true,
      "price": 49.99,
      "colors": ["Blue", "Black"],
      "sizes": ["M", "L", "XL"],
      "description": "Stylish and durable denim jacket perfect for any season.",
      "reviews": [5, 5, 4, 5],
      "category": "Jackets"
    },
    {
      "id": 3,
      "title": "Chinos Pants",
      "image": "https://s3-alpha-sig.figma.com/img/cc73/aa4a/0e8af69dd454db02bbfa89c8b3be4f4a?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DVPWp8fYMOvJpMfGkJ5QducOfVb6DJSaWxlDKzObRsQdPxQYeorJ~mT-e13c8J7-gM5p6oAirunZLecWU-HnoBCU40Xb6eiQvadUrhRRVYB7ZKf2lTm1hSwbkEHfCZonniUzuTt6MUoM33gTj5A7EZoT2O~8tOj5VABciYjCCKnbGVsfT5Ia7U~Vt~6jTS4uSgMOD7pGnJFa51qqpaUtuTGdPs1uY78v0d1L5Y7rXkoI2Ga1o18KVb3Sa3lcz0XI7P94CTVFOxGcd~QBu0NrODi-kKsz23i2Ovpt~J0INa1sND7qV2dKvMrzKwoqz4E1k67OIyooKmViecEElYRQmA__",
      "rating": 4.2,
      "isStock": false,
      "price": 34.99,
      "colors": ["Beige", "Navy", "Olive"],
      "sizes": ["S", "M", "L"],
      "description": "Comfortable and stylish chinos pants for casual and formal wear.",
      "reviews": [4, 4, 5, 3],
      "category": "Pants"
    },
    {
      "id": 4,
      "title": "Summer Dress",
      "image": "https://s3-alpha-sig.figma.com/img/dbac/8aa5/e758714d6dd93e24df2731f70e55e10c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5v3RMFNzJGVVV9iz-76GAr8g~K1xmOPeCPISSfEvptte4lm3ci3~LWoAEUby41T0-K-TsI62Sba2wG8ZSpousJbbiZrSxfX8VWQrLYVUUC67wtWceSxcm~gARanxH049Grv-WvbT1ICx2UO4qaOxyKPOUpZEo0aTpNvziOpWQotfTzSnsZJ9JBw424npQjeIMcI0bFAIr3MwO1r5M7y4m34FMNfoga1hjMlu8Vnwfhj6VHlXx6-KuPCw7ubEXa-MhqI2G5ch2rW7-kGX-xmH5QirEczms5J-9lx59hn0Fwwv7OncsqO5sXDDxHbSHXUU-IjsomcyPdc4YflpXvd2Q__",
      "rating": 4.7,
      "isStock": true,
      "price": 29.99,
      "colors": ["Yellow", "Pink", "Blue"],
      "sizes": ["XS", "S", "M", "L"],
      "description": "Lightweight and airy dress perfect for summer outings.",
      "reviews": [5, 4, 4, 5],
      "category": "Dresses"
    },
    {
      "id": 5,
      "title": "Hoodie Sweatshirt",
      "image": "https://s3-alpha-sig.figma.com/img/0089/4ce1/a46321deb8faf2c7f96de69b04386982?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GwOtgpKPhHbvv40M3yoPYNkoDrJWc5cpDt2UT7aKJy3lwRuVHllmnKkYZFGLyeXlo9IXjJ-8SGwgMLdRq7sITPDOQZ6rp358G5viDsUcHT1pFJSVwidv5ZvJzVWF-FdLzlehWDBMWwneA2xjKSLVoElvoEKbKU5vtZcG-0dGe-v4PwkB9mwb5h6ENS3VA7CimHRHwqU-Buw0LMEN5WPNVo06Ix4GOvJDWpzrXmivZbmky2X5cMReUP6Kb~X5AFO6lK4-fHbNpoPi-TjQ4kdCMGdZvbodZVOwbqFH8j8mA3FLwzJDzTy2MqA0wP7aFTwskxBs5Q8lDcmqGkoRYMDX-Q__",
      "rating": 4.6,
      "isStock": true,
      "price": 39.99,
      "colors": ["Gray", "Black", "Navy"],
      "sizes": ["S", "M", "L", "XL", "XXL"],
      "description": "Comfortable hoodie with a kangaroo pocket and adjustable hood.",
      "reviews": [5, 4, 5, 4],
      "category": "Sweatshirts"
    },
    {
      "id": 6,
      "title": "Sports Shorts",
      "image": "https://s3-alpha-sig.figma.com/img/3b7b/691a/04200a00273834b0da44eaca1a012086?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~iKRlCgvDXKPT6omVJ0~NrsjPL9BQ2p4lgCOp1~acijVhyvESw8EldKV4oVNb5Fh9seTHel8~IFt9xnpEnaAhaeQrTHO3zz-9oPnyVxl~bg4xnTgAcNjM3qKK7suYgnN3Qt94HSMMmJhLz2GPbIHE6vXl0Z153gc9YIOzbfd9-FGma-6kBInwf7XpBqqBq1H7t-R6MJ2TPdBhLMLz8IMVK4MRKX1GK5sBeC~MQolnsdvYPI6Oako9N2Tr3wZS6qa1dkWOsRQvas-AcO~z5Ruo-shq5D6fGpRbqtqhaYOxV349ALoN1Rc48JQypXL9OEk2SzdjlU0g-wNiYgO8yB5g__",
      "rating": 4.3,
      "isStock": false,
      "price": 24.99,
      "colors": ["Black", "Blue", "Gray"],
      "sizes": ["M", "L", "XL"],
      "description": "Breathable and flexible shorts for workouts and sports activities.",
      "reviews": [4, 4, 4, 5],
      "category": "Shorts"
    },
    {
      "id": 7,
      "title": "Flannel Shirt",
      "image": "https://s3-alpha-sig.figma.com/img/6cc5/4b32/7a503fd4e0b047c0417fdc1b0d0b0a79?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GvoRtk1pkIQKaWWlzJ8N75evG5EIZ7tD-eISc97n5Er2AXRNdjbXXcBU68s9aTvi56MMfh7EzkR7bZ~0xh-xYnEihjDksxYGWllF8Nv04U3wJkHyLebr3LSSu~n4ORyvyRfuSlbGlLMdpCvNiD2yIj9vw8wGw83ueAuMA5gIo8wLi5GCKYejdDQ23YzScPrIzCvK8jB5y~oSb1sQGVjRf85pwWE~Og94xElF7tX-UGyGgokEptENhTgRuViqrUMnFhyayYO9Xg-ONulQiqM6nhKfvkk5Mnb3eTihgQ2naICXSb0Y4RTSOwVq8fR75nF~Ju-jTcEF~xlna2wWlxkFqw__",
      "rating": 4.5,
      "isStock": true,
      "price": 27.99,
      "colors": ["Red Plaid", "Green Plaid"],
      "sizes": ["M", "L", "XL"],
      "description": "Warm and stylish flannel shirt for a casual look.",
      "reviews": [5, 4, 4, 4],
      "category": "Shirts"
    },
    {
      "id": 8,
      "title": "Cargo Pants",
      "image": "https://s3-alpha-sig.figma.com/img/b72a/6f3c/9b0fc31bc6ec3e92c8297ba178f4d96a?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qVTWRXFr9tpL-VYato3Qne6SIqaVoSaXFpsB2Z4JhR2OdOAsFagVWJe19e9BDmIhIopBb1M9~yf1F0B7tmEQhe9P8VPjtarDoHAjQ0IuSWY2C~8KPOVfP5ZRMPWg~bcrpPcrLL4TLcwuerpwz0KjYbYx4omLVU4vrCO-1XJZzW-yHbiEtqjpoMnI2l4iPd9G9dQIMzi-yb9rD86Xrz6sueqGr-E1cpzskbNkoA8bZv50teTGCb6UYW~cJuMj3TMZ-9oYhiEt7dJWsBaUIir7j8Bj7Bl6dvpnczLd1SEXPqmle4xLHHdOHjwlPj93vJaC5Z6PfW2jYSmzQyLC8CCFhw__",
      "rating": 4.4,
      "isStock": true,
      "price": 39.99,
      "colors": ["Khaki", "Gray", "Black"],
      "sizes": ["M", "L", "XL", "XXL"],
      "description": "Functional cargo pants with multiple pockets for storage.",
      "reviews": [4, 5, 4, 4],
      "category": "Pants"
    },
    {
      "id": 9,
      "title": "Puffer Jacket",
      "image": "https://s3-alpha-sig.figma.com/img/a7d9/2a09/015b72cbd4cb7c81e06159e063ba609a?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NsCNKs0yXNNJRHdcqKxTP8J81739-U1-0495DbDuwd~a2mZ0QDirCkLxdXzadnBx4UtT4ADeDAneXqzH8G~c4Xb1AGa74g0pc-UvoXfn2F11OZNLZVCMRjlSe4T0DOlKtlIEpLBs8ALgtFG1DtnmEycpp0blsyy-sobhavaCDhdaRM7Xp7BWKnskSGTSnmV8WyK5MGY0BHlrkjbEQZ8TCDWPaxNJf4pf~YUif2yZoIdQ17zEkd18OUnLvavudOAUhfql9b57t8aO8yZESdXuY9v-CMOuwyYXM-Uu-6920ZFTKfhIraB3wbxlpS1ZeqECvtY7Dww8yCNPpTAgqh2L7A__",
      "rating": 4.9,
      "isStock": false,
      "price": 89.99,
      "colors": ["Black", "Navy", "Red"],
      "sizes": ["M", "L", "XL"],
      "description": "Warm and lightweight puffer jacket for cold weather.",
      "reviews": [5, 5, 5, 5],
      "category": "Jackets"
    },
    {
      "id": 10,
      "title": "Graphic T-Shirt",
      "image": "https://s3-alpha-sig.figma.com/img/7f43/9f88/3d50177232901e42884d41bd843ec040?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJszGs3JWIne70tLr9UXQsrZpFtgRqwOnR71awP2McpuwCIIU~0zjqLhBxg3A2DHvGGXlOj9BDLE22oNHa-BdmFYFiGD0PsdpTZ4uQf9O0DxBSAr2FNFp4h7AW91WbP3Ei8MR4z6wG0k4pIVtRVat4oGTTUbNHih4xCIxC~3-HP-nS~FLm9lpnSLz7avJbx2-IVbk5neykh6CpHKqMTy8I1VHW7Hir0IVdja4oBWFZ-T85OkLmI2O280qKictLpjxZP1meERbjAUMhxP9WVqjsCH2r9lXCdJGrCFbUO34H1x1Or-rXS9ZUR5LOeyE0FmQCQI8oOf6En0yRSk7qca3g__",
      "rating": 4.1,
      "isStock": true,
      "price": 22.99,
      "colors": ["White", "Black"],
      "sizes": ["S", "M", "L"],
      "description": "Trendy graphic T-shirt with a comfortable fit.",
      "reviews": [4, 4, 4, 3],
      "category": "Jackets"
    }
  ]


  getProducts(): IProduct[] {
    return this.products;
  }

  getProductsByCategory(category: string): IProduct[]{
    return this.products.filter(product => product.category === category);
  }

  constructor() { }
}
