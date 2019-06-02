export class  Movie {

// properties
  adult: boolean;
  backdropPath: string;
  // genreIds: Number<array>
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;

  // constructor
  constructor(args?) {

    if (args) {
      // we are assigning to the class properties
      this.adult = args.adult;
      this.backdropPath = (args.backdrop_path) ?  args.backdrop_path : null;
      this.posterPath = args.poster_path;
      // this.backdropPath = args.backdrop_path;
      // this.genreIds = args.genre_ids;
      this.id = args.id;
      this.originalLanguage = args.original_language;
      this.originalTitle = args.original_title;
      this.overview = args.overview;
      this.popularity = args.popularity;

      this.releaseDate = args.release_date;
      this.title = args.title;
      this.video = args.video;
      this.voteAverage = args.vote_average;
      this.voteCount = args.vote_count;
    }
  }
}
