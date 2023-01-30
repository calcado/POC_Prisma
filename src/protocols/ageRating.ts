export type AgeRating = {
    id:number
    ageRate: string
}

export type AgeRatingId = Omit<AgeRating, "ageRate">