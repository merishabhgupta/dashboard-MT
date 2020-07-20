import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentComponent: string = ''
  constructor(private route: Router) { }

  ngOnInit() {
    this.currentComponent = this.route.url;
    console.log(this.currentComponent);
    
  }

}
