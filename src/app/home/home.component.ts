import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // data = [
  //   { pagetitle: "Home"},
  //   { pageTagLine : "adorable moment to achive this "}
  // ]

    pageTagLine = 'app works!adorable moment to achive this';

    pageContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    pageContent2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    
}
