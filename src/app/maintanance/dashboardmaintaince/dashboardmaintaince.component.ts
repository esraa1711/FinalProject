import { Component } from '@angular/core';
import { MaintainceCenterService } from 'src/app/maintanance/maintaince-center.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboardmaintaince',
  templateUrl: './dashboardmaintaince.component.html',
  styleUrls: ['./dashboardmaintaince.component.css']
})
export class DashboardmaintainceComponent {
  maincenter: any=[];
  perpage: number = 2;
  toatal: number = 2;
  currentPage: number = 1;
  constructor(
    private router: Router,
    private service: MaintainceCenterService
  ) {}
  compbooking() {
    this.router.navigate(['bookingcomp']);
  }

navigate(){
this.router.navigate(['archive']);

}

  ngOnInit(): void {
    this.getallmaintain();
  }
  getallmaintain() {
    this.service.getmaintainceforspecificuse().subscribe((res: any) => {
      // console.log(this.maincenter)
      this.toatal = res.mainCenters.total;
      this.perpage = res.mainCenters.per_page;
      this.currentPage = res.mainCenters.current_page;
console.log(res)

    this.maincenter.push(res.mainCenters);
console.log(this.maincenter)
// this.getallmaintain();
  });
  }
  // delte(id: any) {
  //   this.service.deletedata(id).subscribe((res: any) => {
  //     console.log('sucess');

  //     this.getallmaintain();
  //   });
  // }


}
