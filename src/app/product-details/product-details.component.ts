import { Component, inject } from '@angular/core';
import { CartDetailsService } from "../cart/cart-details.service"

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  cartService: CartDetailsService = inject(CartDetailsService);
  quantity = 0

  addItem() {
    this.quantity++;
  }

  removeItem() {
    if (this.quantity > 0)
      this.quantity--;
  }

  addToCart() {
    this.cartService.addBatch(this.quantity)
    this.quantity = 0
  }

}
