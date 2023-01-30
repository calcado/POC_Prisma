# POC_Prisma
A simple POC about Prisma basics.
 
# About
This is a Prisma back-end project that allows you to do a CRUD (Create, Read, Update,Delete) about movies collections.


3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env.development` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
5. Run all migrations

```bash
npm run migration:run
```

6. Seed db

```bash
npm run dev:seed
```
# Routes
1) get("/movies")
Get all the movies from the database
format:
 {
    id?: number,
    name: string,
    platform: string,
    genre: string,
    status:string,
    notes?:string
   }

2)get("/movies/platform")
Get all the movies from a certain type of platform
format:
{
platform: string
}


3)post("/movies");
Create and post new movies
format:
{
    id?: number,
    name: string,
    platform: string,
    genre: string,
    status:string,
    notes?:string
}

4)put("/movies/:id");
Update the movie's section of "status" and "notes" with params

5)delete("/movies/:id");
Delete a movie with params

6)get("/ageRate");
Get all age rates differentes rate types

7)post("/ageRate");
Create a age rate type

8)delete("/ageRate/:id");
Delete a age rate

9)get("/trailers")
Get all different trailers

10)post("/trailers")
Post a trailer 

11)delete("/trailers/:id")
Delete a trailer