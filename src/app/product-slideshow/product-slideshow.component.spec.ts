import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSlidewhowComponent } from './product-slidewhow.component';

describe('ProductSlidewhowComponent', () => {
  let component: ProductSlidewhowComponent;
  let fixture: ComponentFixture<ProductSlidewhowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSlidewhowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSlidewhowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
