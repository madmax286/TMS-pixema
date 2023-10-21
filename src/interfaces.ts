export interface IMovieCard {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string;
}

export interface IMovie extends IMovieCard {
    Rated?: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language?: string,
    Country: string,
    Awards?: string,
    Ratings?: [
        {
            Source: string,
            Value: string
        },
        {
            Source: string,
            Value: string
        },
        {
            Source: string,
            Value: string
        }
    ],
    Metascore?: string,
    imdbRating: number,
    imdbVotes?: string,
    DVD?: string,
    BoxOffice: string,
    Production: string,
    Website?: string,
    Response?: boolean
}