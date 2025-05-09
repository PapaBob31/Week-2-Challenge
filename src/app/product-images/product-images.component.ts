import { Component } from '@angular/core';

@Component({
  selector: 'app-product-images',
  imports: [],
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.scss'
})

export class ProductImagesComponent {
  displayedImg: {name: string; thumbNailLink: string; imgLink: string}; // product's main slideshow default slide image

  // all the product's images and other attributes that make the data easier to work with
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

  //'cover' slideshow as in the slideshow that covers the whole page
  slideShowVisible = false; // controls the visibility of the 'cover' slideshow. 
  slideLength = 0; // equivalent to the number of 'cover' slideshow 'slides' that have moved off screen
  slideStyle = `transform: translateX(0)` // css style to be applied to the main images container inside 'cover' slideshow
  displayedSlideThumbNail = "" // thumbnail of the currently displayed slide in the 'cover' slideshow
  
  constructor() {
    this.displayedImg = this.images[0]
    this.displayedSlideThumbNail = this.images[this.slideLength].name
  }

  changeDisplayedImage(event: MouseEvent) {
    this.displayedImg = this.images.find((img) => img.name === (event.target as HTMLImageElement).dataset["name"])!
  }

  displaySlideShow() {
    this.slideShowVisible = true;
  }

  hideSlideShow() {
    this.slideShowVisible = false;
    this.slideLength = 0;
    this.slideStyle = `transform: translateX(0)`
    this.displayedSlideThumbNail = this.images[this.slideLength].name
  }

  slideRight() {
    if (this.slideLength === 0)
      return;
    else this.slideLength--;

    // moves the whole slideshow container but the element the container is nested inside
    // has a hidden overflow giving the illusion of a moving slideshow
    this.slideStyle = `transform: translateX(-${this.slideLength*100}%)`
    this.displayedSlideThumbNail = this.images[this.slideLength].name // update the currently visible slide's thumbnail
  }

  slideLeft() {
    if (this.slideLength === 3)
      return;
    else this.slideLength++;

    // moves the whole slideshow container but the element the container is nested inside
    // has a hidden overflow giving the illusion of a moving slideshow
    this.slideStyle = `transform: translateX(-${this.slideLength*100}%)`
    this.displayedSlideThumbNail = this.images[this.slideLength].name // update the currently visible slide's thumbnail
  }
}
