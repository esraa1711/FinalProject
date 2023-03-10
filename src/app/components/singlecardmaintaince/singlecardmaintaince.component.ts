import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlecardmaintaince',
  templateUrl: './singlecardmaintaince.component.html',
  styleUrls: ['./singlecardmaintaince.component.css']
})
export class SinglecardmaintainceComponent {
  @Input() card: any;
  selected = 0;
  constructor(private router: Router) {
    this.selected = 0;
  }
  navigate() {
    let id = this.card.id;
    this.router.navigate(['maintainceDetalis', id]);
  }
  getRate(val:any){
    console.log(val)
  }
}
