import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProduct!: FormGroup;
  category:any[]=[]
  Brands:any[]=[]
  models:any[]=[]
  fileNmae:any=''
  constructor( private fb:FormBuilder , private api : ProductService){ }
  createForm(){
    this.addProduct =  this.fb.group({
      name: ['', [Validators.required]],
      made: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1900),Validators.max(2023)]],
      type: ['', [Validators.required]],
      img: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      categories_id: ['', [Validators.required]],
      category_model_id: ['', Validators.required],
      category_brand_id: ['', Validators.required],
      
    }); 
   }
  ngOnInit(): void {
this.AllBrands()
this.AllCategory()
this.Allmodels()
this.createForm()

  }


  creatProduct(){
    let formData= new FormData()
    formData.append("name" , this.addProduct.value['name'], )
    formData.append("made" , this.addProduct.value['made'], )
    formData.append("price" , this.addProduct.value['price'], )
    formData.append("type" , this.addProduct.value['type'], )
    formData.append("img" , this.addProduct.value['img'], )
    formData.append("desc" , this.addProduct.value['desc'], )
    formData.append("categories_id" , this.addProduct.value['categories_id'], )
    formData.append("category_model_id" , this.addProduct.value['category_model_id'], )
    formData.append("category_brand_id" , this.addProduct.value['category_brand_id'], )

    console.log(this.addProduct.value);
    this.api.storeProduct(formData).subscribe(res=>{
     alert('success')
    })

  }
  
  AllCategory(){
    this.api.getAllCategories().subscribe(res=>{
      this.category=res
    })
  }

  Allmodels(){
    this.api.getAllModels().subscribe(res=>{
      this.models=res
    })
  }

  AllBrands(){
    this.api.getAllBrand().subscribe(res=>{
      this.Brands=res
      console.log(this.Brands)
    })
  }


  selectImg(event : any){
    this.fileNmae = event.target.value
    this.addProduct.get('img')?.setValue(event.target.files[0])
      }


}
