import { Component, OnInit } from '@angular/core';
import * as data from '../../Data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // getting posts from the JSON 
  totalPosts = data.posts;

  constructor() { }

  ngOnInit(): void {
  }

}
