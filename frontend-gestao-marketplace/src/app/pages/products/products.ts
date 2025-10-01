import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  private readonly _productsService = inject(ProductsService);
}
