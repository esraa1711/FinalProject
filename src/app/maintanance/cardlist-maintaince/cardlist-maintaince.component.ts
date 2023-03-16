import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaintainceCenterService } from 'src/app/maintanance/maintaince-center.service';

@Component({
  selector: 'app-cardlist-maintaince',
  templateUrl: './cardlist-maintaince.component.html',
  styleUrls: ['./cardlist-maintaince.component.css'],
})
export class CardlistMaintainceComponent {
  key = '';
  perpage: number = 2;
  toatal: number = 2;
  currentPage: number = 1;
  constructor(private service: MaintainceCenterService,private router:Router) {}
  maintaincecenter_data: any = [];
  cities: any = [];
  ngOnInit(): void {
    //     if('acesstoken' in localStorage){
    //       JSON.parse(localStorage.getItem('acesstoken')!)
    //     }
    // else{
    //   localStorage.setItem(
    //     'acesstoken',
    //     JSON.stringify(
    //       `'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
    //       .eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NzgzNjc4NzEsImV4cCI6MTY3ODU0ODA1MSwibmJmIjoxNjc4MzY3ODcxLCJqdGkiOiJFUHp1ekVISVY3YndhOVhNIiwic3ViIjoiMyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ
    //       .I9SEtOY7hbnM9TwZi-SNkJ2rZorNOGITIxsDAOQP0go'`
    //     )
    //   );
    // }

    this.getallmaintaince();
    this.getselection();
    // this.changemaintaince()
  }

  getallmaintaince() {
    console.log(this.currentPage);
    this.service.getAllmainceCenters(this.currentPage).subscribe((val: any) => {
      // console.log(val)
      console.log(val)
      this.toatal = val.mainCenters.total;
      this.perpage = val.mainCenters.per_page;
      this.currentPage = val.mainCenters.current_page;
      this.maintaincecenter_data = val.mainCenters;
      // (this.maintaincecenter_data = val.mainCenters)
    });
  }
  navigate(){
    this.router.navigate(['dbmaintance']);
  }

  change(event: any) {
    console.log(event);
    this.currentPage = event;
    this.getallmaintaince();
  }

  getselection() {
    this.service.getselect().subscribe((res: any) => {
      let cities = res.map(function (item: any) {
        return item.city;
      });
      this.cities = cities;
    });
  }

  changemaintaince(catagory: any) {
    // console.log("hi")
    //  console.log(catagory.target.value)
    if (catagory.target.value == 'All') {
      this.getallmaintaince();
    } else {
      // console.log(catagory.target.value)
      this.service.getcatogry(catagory.target.value).subscribe((res: any) => {
        this.maintaincecenter_data = res;
        // console.log(res)
      });
    }
    // console.log(catagory.target.value)
  }
}