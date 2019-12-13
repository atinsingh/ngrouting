import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
   testParam;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe( param =>{
        this.testParam = param
    })
  }

}
