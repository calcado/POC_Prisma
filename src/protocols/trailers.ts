export type Trailers = {
    id:number,
    url:string,
}

export type TrailersId = Omit<Trailers, "url">