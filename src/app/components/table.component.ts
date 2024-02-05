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
  filteredProducts: Array<ProductInterface> = [];

  ngOnInit() {
    this.productsLength = this.products.length;

    if (this.productsLength) {
      this.setPagesList(this.productsLength);
    }

    this.setVisibleProducts(this.products);
  }

  setPagesList(productsLength: number): void {
    const pagesQuantity = Math.ceil(productsLength / this.maxProductsOnPage);
    this.pagesList = Array.from({ length: pagesQuantity }, (j, i) => i + 1);
  }

  changePageNumber(event: any, pageNumber: number): void {
    event.preventDefault();
    this.currentPageNumber = pageNumber;
    this.setVisibleProducts(this.filteredProducts || this.products);
  }

  setVisibleProducts(products: ProductInterface[]): void {
    this.visibleProducts = products.slice((this.currentPageNumber - 1) * this.maxProductsOnPage, this.currentPageNumber * this.maxProductsOnPage);
    this.productsOnPage = this.visibleProducts.length;
  }

  onSearchChange(event: Event, filterByKey: any): void {
    this.currentPageNumber = 1;

    const searchValue = (event.target as HTMLInputElement).value;
    this.filteredProducts = this.products.filter((product: ProductInterface) => {
      const productValue = product[filterByKey as keyof typeof product].toString();
      return (productValue.indexOf(searchValue) !== -1)
    });

    this.setPagesList(this.filteredProducts.length);
    this.setVisibleProducts(this.filteredProducts);
  }
}
