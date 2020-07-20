import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData = []
  curr: string = '';
  noOfPages;
  arr = [];
  items;
  constructor(private route: Router) { }

  ngOnInit() {
    this.userData = [
      {
        cust_name: "Hayes Boule",
        email: "hboule0@hp.com",
        country: "Brazil",
        code: "BR",
        ship_date: "10/15/2017",
        ship_status: "Approved",
        comp_name: "Casper-Kerluke",
      },
      {
        cust_name: "Humbert Brensen",
        email: "humbert@theguardian.com",
        country: "Vietnam",
        code: "VN",
        ship_date: "04/24/2016",
        ship_status: "Paid",
        comp_name: "Hadleweick and sons",
      },
      {
        cust_name: "Jareb Labro",
        email: "jlabro2@kisckstarter.com",
        country: "Philippines",
        code: "PH",
        ship_date: "07/11/2017",
        ship_status: "Approved",
        comp_name: "Kuhlman Inc",
      },
      {
        cust_name: "Krishna Tospel",
        email: "kstospel03@flickr.com",
        country: "China",
        code: "CN",
        ship_date: "02/05/2018",
        ship_status: "Pending",
        comp_name: "Prosacco-Kesler",
      },
    ]
    this.curr = this.route.url
    console.log(this.curr)
    

    this.noOfPages = this.userData.length;
      for (let i = 0; i < this.noOfPages; i++) {
        this.arr.push('');
      }
      this.items = Array(this.arr.length).fill(0).map((x, i) => ({ id: (i + 1), name: this.arr[i] }));
  }

}
