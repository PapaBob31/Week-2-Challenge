import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDetailsService {

  constructor() { }
  batches: {id: string; quantity: number}[] = [];

  genRandomId() {
    const str = "EFGHabcdefghijklmnopqrstuvwxyz0123456789ABCD"
    let id = ""
    for (let i=0; i<5; i++) {
      id += str[Math.floor(Math.random() * str.length)]
    }
    return id;
  }

  getBatches() {
    return this.batches
  }

  addBatch(quantity: number) {
    this.batches.push({id: this.genRandomId(), quantity});
  }

  removeBatch(id: string) {
    if (this.batches.length === 0)
      return;
    this.batches = this.batches.filter(batch => batch.id !== id);
  }
}
