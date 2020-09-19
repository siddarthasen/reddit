import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../Data.json';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, OnDestroy {

  post: any;
  day: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.post = data.posts[id-1];
    });
    this.day = Math.floor(this.calculateDate());
  }

  // The the days since the post was created
  calculateDate(): number {
    let date1 = new Date();
    let date2 = new Date(this.post.published);
    let diffDate = (date1.getTime() - date2.getTime())/(1000 * 3600 * 24);
    return diffDate; 
  }

  ngOnDestroy(): void {
  }

}
