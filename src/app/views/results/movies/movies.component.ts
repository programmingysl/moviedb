import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  query = 'Synecdoche+New+York';
  constructor(private moviedb: MoviedbService) {}

  ngOnInit() {
    this.moviedb.movieSearch(this.query).subscribe( results => {
      console.log(results);
    });
  }
}
