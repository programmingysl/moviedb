import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../../models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  query: string;
  movie: Movie[];
  constructor(private moviedb: MoviedbService,  private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.query = params.get('query');


    });


    this.moviedb.movieSearch(this.query).subscribe( results => {

      console.log = results;
      this.movie = results;
    });


}

   searchMovies() {



  }
}
