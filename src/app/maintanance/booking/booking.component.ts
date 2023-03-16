import { Component ,  } from '@angular/core';
import { MaintainceCenterService } from 'src/app/maintanance/maintaince-center.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  booking: any;
  data: any;
  user: any;
  id: any;
  x: any;
  item: any;
  constructor(
    private service: MaintainceCenterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getusers().subscribe((res: any) => {
      this.user = res;
      console.log(this.user);
    });
    this.service.getbooking().subscribe((res: any) => {
      this.booking = res;

      console.log(this.booking);
    });

    // this.data=res.user_id
    // console.log(this.data)
  }
  navigate() {
    this.router.navigate(['dbmaintance']);
  }
}

