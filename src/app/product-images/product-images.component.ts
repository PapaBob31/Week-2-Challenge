import { Component } from '@angular/core';

@Component({
  selector: 'app-product-images',
  imports: [],
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.scss'
})

export class ProductImagesComponent {
  displayedImg: {name: string; thumbNailLink: string; imgLink: string};
  images = [
    {
     name: "image-1",
     thumbNailLink: "/assets/image-product-1-thumbnail.jpg",
     imgLink: "/assets/image-product-1.jpg"
    },
    {
     name: "image-2",
     thumbNailLink: "/assets/image-product-2-thumbnail.jpg",
     imgLink: "/assets/image-product-2.jpg"
    },
    {
     name: "image-3",
     thumbNailLink: "/assets/image-product-3-thumbnail.jpg",
     imgLink: "/assets/image-product-3.jpg"
    },
    {
     name: "image-4",
     thumbNailLink: "/assets/image-product-4-thumbnail.jpg",
     imgLink: "/assets/image-product-4.jpg"
    }
  ]

  constructor() {
    this.displayedImg = this.images[0]
  }

  changeDisplayedImage(event: MouseEvent) {
    this.displayedImg = this.images.find((img) => img.name === (event.target as HTMLImageElement).dataset["name"])!
  }
}
