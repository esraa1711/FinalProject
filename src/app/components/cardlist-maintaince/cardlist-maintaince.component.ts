import { Component } from '@angular/core';
import { MaintainceCenterService } from 'src/app/services/maintaince-center.service';

@Component({
  selector: 'app-cardlist-maintaince',
  templateUrl: './cardlist-maintaince.component.html',
  styleUrls: ['./cardlist-maintaince.component.css'],
})
export class CardlistMaintainceComponent {
  constructor(private service: MaintainceCenterService) {}
  maintaincecenter_data: any;
  ngOnInit(): void {
    this.service.getAllmainceCenters().subscribe(
      (val: any) =>
        (this.maintaincecenter_data = val)
    );
  }

  getcategory() {
    this.service.getAllmainceCenters().subscribe(res=>{
    this.maintaincecenter_data=res
    console.log(res)
    })
  }
}