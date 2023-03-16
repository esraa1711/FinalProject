import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MerchantService } from '../services/merchant.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  Archive: any[] = []
  Brand:any[]=[]
  Models:any[]=[]
  Category:any[]=[]
  constructor(private api: MerchantService , private productServe : ProductService ) { }
  ngOnInit(): void {
    this.GetBrands()
this.GetModels()
this.GetCategory()
this.getArchive()
  }

  getArchive() {
    this.api.Archive().subscribe(res => {
      this.Archive = res.Archive
      console.log(res)
    })
  }
  GetModels(){
    this.productServe.getAllModels().subscribe(res=>{
this.Models=res
    })
  }

  GetBrands(){
    this.productServe.getAllBrand().subscribe(res=>{
this.Brand= res
console.log(this.Brand)
    })
  }

  GetCategory(){
    this.productServe.getAllCategories().subscribe(res=>{
this.Category=res
    })
  }
  Restore(id:any){
    this.api.restorePro(id).subscribe(res=>{
      this.getArchive()
    })

  }

}
