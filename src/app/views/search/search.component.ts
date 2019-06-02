import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  query: string; // var to hold the value of the input textbox


  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {

    this.router.navigateByUrl('results/' + this.query);

  }
}
