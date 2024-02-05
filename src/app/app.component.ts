import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from 'src/app/app.module';
import { ProductsApiService } from 'src/app/api/products-api.service';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [ProductsApiService]
})
export class AppComponent implements OnInit {
  products: ProductInterface[] = [];
  productsFetching = true;

  constructor(private productsApiService: ProductsApiService) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsFetching = true;

    this.productsApiService.getAll().subscribe(products => {
      this.products = products;
      this.productsFetching = false;
    });
  }
}
