import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MaintainceCenterService } from 'src/app/maintanance/maintaince-center.service';

@Component({
  selector: 'app-singlecardmaintaince',
  templateUrl: './singlecardmaintaince.component.html',
  styleUrls: ['./singlecardmaintaince.component.css']
})
export class SinglecardmaintainceComponent {
  @Input() card: any;
rate:any;
  constructor(private router: Router,private service:MaintainceCenterService) {}

  
  // navigate() {
  //   let id = this.card.id;
  //   // console.log(id)
  //   console.log(this.card)
  //   this.router.navigate(['Details', id]);
  // }
ngOnInit(): void {
// this.service.getrate(this.card.id).subscribe((res:any)=>{
// this.rate=res
// });
//     }
}
}