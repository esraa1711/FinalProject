import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input()data:any=[]
Categories: any[] = []
loading: boolean = false

constructor(private service : ProductService){}
ngOnInit(): void {
  this.getCategories()
}


getCategories() {
  this.loading = true

  this.service.getAllCategories().subscribe((res: any) => {
    this.Categories = res
    this.loading = false

  }, err => {
    this.loading = false

    alert("Error")
  })
}

}
