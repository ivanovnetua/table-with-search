import { NgModule } from '@angular/core';
import { TableComponent } from 'src/app/components/table.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  exports: [TableComponent]
})
export class AppModule {}
