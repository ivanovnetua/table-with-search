import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.less'],
})
export class TableComponent implements OnInit {
  @Input() products: Array<ProductInterface> = [];
  currentPageNumber = 1;
  productsLength = 0;
  readonly maxProductsOnPage = 5;
  pagesList: number[] = [];
  visibleProducts: Array<ProductInterface> = [];
  productsOnPage = 0;

  ngOnInit() {
    this.productsLength = this.products.length;

    if (this.productsLength) {
      this.setPagesList();
    }

    this.setVisibleProducts();
  }

  setPagesList(): void {
    const pagesQuantity = Math.ceil(this.productsLength / this.maxProductsOnPage);
    this.pagesList = Array.from({ length: pagesQuantity }, (j, i) => i + 1);
  }

  changePageNumber(event: any, pageNumber: number): void {
    event.preventDefault();
    this.currentPageNumber = pageNumber;
    this.setVisibleProducts();
  }

  setVisibleProducts(): void {
    this.visibleProducts = this.products.slice((this.currentPageNumber - 1) * this.maxProductsOnPage, this.currentPageNumber * this.maxProductsOnPage);
    this.productsOnPage = this.visibleProducts.length;
  }
}
