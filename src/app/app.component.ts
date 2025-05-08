import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component"
import { ProductDetailsComponent } from "./product-details/product-details.component"
import { ProductImagesComponent } from "./product-images/product-images.component"

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductDetailsComponent, ProductImagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
