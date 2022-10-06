import { Component, OnInit } from '@angular/core';
import { Post } from './models/post';
import { RestApiService } from './services/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  posts: any = [];
  title = 'dashboarddemo';
  constructor(public restApi: RestApiService) {}
  
  ngOnInit(): void {
      this.loadEmployees();
  }
   // Get employees list
   loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.posts = data;
    });
  }
}
