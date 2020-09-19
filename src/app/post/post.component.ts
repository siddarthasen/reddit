import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  inputs: ['post']
})
export class PostComponent implements OnInit {

  @Input() post: any;

  total: number;
  day: number;

  constructor() {
  }
  
  ngOnInit(): void {
    this.day = Math.floor(this.calculateDate());
  }

  // The the days since the post was created
  calculateDate(): number {
    let date1 = new Date();
    let date2 = new Date(this.post.published);
    let diffDate = (date1.getTime() - date2.getTime())/(1000 * 3600 * 24);
    return diffDate; 
  }

}
