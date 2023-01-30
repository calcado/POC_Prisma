export type Movies = {
    id: number,
    name: string,
    platform: string,
    genre: string,
    status:string,
    notes:string,
    ageRatingId:number,
    trailerId:number,
   }

export type Platform = Omit<Movies, "id"|"name"|"genre"|"status"|"notes" >

export type Review = Omit<Movies, "id"|"name"|"platform"|"genre"|"ageRatingId"|"trailerId">

export type MovieId = Omit <Movies, "name"|"platform"|"genre"|"status"|"notes" >