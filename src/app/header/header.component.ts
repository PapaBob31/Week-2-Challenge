import { Component, inject } from '@angular/core';
import { CartDetailsService } from "../cart/cart-details.service"

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartService: CartDetailsService = inject(CartDetailsService);
  cartContent: {id: string; quantity: number}[];
  cartIsVisible = false
  menuIsVisible = false

  constructor() {
    this.cartContent = this.cartService.batches
  }

  removeContent(event: MouseEvent) {
    const id = (event.target as HTMLButtonElement).dataset["batchId"]!
    this.cartService.removeBatch(id)
  }

  toggleCartVisibility() {
    this.cartIsVisible = !this.cartIsVisible
  }

  showMenu() {
    this.menuIsVisible = true;
  }

  hideMenu() {
    this.menuIsVisible = false;
  }
}
